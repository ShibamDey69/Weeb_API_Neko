import { WebSocket } from "ws";
import { v4 } from "uuid";
let uuidv4 = v4
let global = {};

function createAuthorHuman(author_id, name) {
  return {
    author_id: author_id.toString(),
    name: name.toString(),
    is_human: true
  }
}

function parseMessage(data) {
  let o = null;
  try {
    o = JSON.parse(data);
  } catch {}
  return o;
}

function generate_cmd_ask(author, chat_id, character_id, text, obj, resolve, stream) {
  const turn_id = uuidv4();
  const request_id = uuidv4();
  let o = {
    "command": "create_and_generate_turn",
    "request_id": request_id,
    "payload": {
      "num_candidates": 1,
      "character_id": character_id,
      "turn": {
        "turn_key": {
          "turn_id": turn_id,
          "chat_id": chat_id
        },
        "author": author,
        "candidates": [
          {
            "candidate_id": turn_id,
            "raw_content": text
          }
        ], "primary_candidate_id": turn_id
      }
    }
  };
  if (obj) {
    return request(obj, o, resolve, { stream: stream });
  }
  return o;
}

async function request(obj, o, resolve, args) {
  const req = JSON.stringify(o);
  await obj.ws.send(req);
  if (!o.request_id) {
    o.request_id = uuidv4();
  }
  const request = { request_id: o.request_id, resolve: resolve, o: o, args: args || {}};
  return obj.requests.push(request);
}

function findRequest(obj, response) {
  if (typeof response.request_id != "string") {
    return 0;
  }
  for (let i = 0; i < obj.requests.length; i++) {
    const element = obj.requests[i];
    if (element.request_id === response.request_id) {
      return i;
    }
  }
}
function createCharAI(token) {
  let obj = {};
  obj.token = token;
  obj.requests = [];
  obj.user_id = null;
  obj.connect = async function(token, callback) {
    if (token) {
      obj.token = token;
    }
    const options = {
      headers: {
        Cookie: `HTTP_AUTHORIZATION="Token ${obj.token}"`
      }
    };
    obj.ws = new WebSocket("wss://neo.character.ai/ws/", options);
    return new Promise((resolve, reject) => {
      obj.ws.on("open", function open() {
        resolve(obj.ws);
      });
      obj.ws.on("error", console.error);
      obj.ws.on("message", function(data) {
        const response = parseMessage(data);
        if (!response) return;
        const turn = response.turn;
        if (!turn) return;
        if (turn.candidates && turn.candidates[0].is_final && turn.author.name !== global.authorName) callback(turn.candidates[0].raw_content);
        const i = findRequest(obj, response);
        if (typeof i != "number") {
          return;
        }
        const element = obj.requests[i];
        if (!element) return;
        let resolve = false;
        if (response.comment) {
          if (response.comment.startsWith("Unauthorized access for user_id:")) {
            obj.user_id = response.comment.replace(/[^0-9]/g, "");
            if (response.turn.candidates[0].is_final) element.resolve(true);
            return obj.requests.splice(i, 1);
          }
        }
        if (response.command == "neo_error") resolve = true;
        if (turn) {
          if (turn.state == "STATE_OK") {
            resolve = true;
          }
        }
        if (response.command == "add_turn") {
          if (element.args.stream) {
            return element.args.stream(response);
          }
        }
        if (resolve) {
          if (element) {
            if (element.resolve) {
              if (response.turn.candidates[0].is_final) element.resolve(response);
              obj.requests.splice(i, 1);
            }
          }
        }
      });
    });
  }
  obj.ask = async function(author, chat_id, character_id, text, stream) {
    return new Promise(function(resolve) {
      generate_cmd_ask(author, chat_id, character_id, text, obj, resolve, stream);
    });
  }
  return obj;
}

async function authenticate(token) {
  if (token && typeof token === "string" && token.trim() && token.length === 40) {
    global.token = token;
  } else {
    throw Error("[characterai] - Please enter a valid HTTP auth token.");
  }
}

async function setup(character_id, chat_id, author_id, author_name) {
  global.characterId = character_id;
  global.chatId = chat_id;
  global.authorId = author_id;
  global.authorName = author_name;
}

async function send(message) {
  return new Promise(async function(resolve, reject) {
    const token = global.token;
    if (!global.token || !global.characterId || !global.chatId || !global.authorId || !global.authorName) {
      throw Error("[characterai] - Not authenticated/initialized."), reject();
    }

    const characterAI = createCharAI(token);
    await characterAI.connect(token, function(message) {
      resolve(message);
    });

    const character_id = global.characterId;
    const chat_id = global.chatId;
    const author = createAuthorHuman(global.authorId, global.authorName);

    characterAI.ask(author, chat_id, character_id, message, (response) => {});
  });
}

export default { authenticate, setup, send };