const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const sign_in_form = document.querySelector(".sign-in-form");
const sign_up_form = document.querySelector(".sign-up-form");
const sign_up_email = document.querySelector(".sign-up-form #email");
const sign_up_password = document.querySelector(".sign-up-form #password");
const sign_up_name = document.querySelector(".sign-up-form #username");
const sign_up_phone = document.querySelector(".sign-up-form #number");
const sign_in_email = document.querySelector(".sign-in-form #email");
const sign_in_password = document.querySelector(".sign-in-form #password");
const urlWow = "https://weebapineko.nekosenpai69.repl.co/register";
// Example POST method implementation:
async function postData(url = "") {
  try {
  // Default options are marked with *
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
  } catch (err) {
    console.log(err);
  }
}


sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

sign_up_form.addEventListener("submit", async(e) => {
  e.preventDefault();
  console.log("ok")
console.log(`${sign_up_form.action}/${sign_up_email.value}/${sign_up_name.value}/${sign_up_phone.value}/${sign_up_password.value}`)
postData(`${sign_up_form.action}?email=${sign_up_email.value}&username=${sign_up_name.value}&phone=${sign_up_phone.value}&password=${sign_up_password.value}`).then((data) => {
  console.log(data)
  alert(data.message);
}).catch(e => {
    console.log(e.message)
}) ;
  
});

sign_in_form.addEventListener("submit", async(e) => {
  e.preventDefault();
  postData(`${sign_in_form.action}?email=${sign_in_email.value}&password=${sign_in_password.value}`).then((data) => {
    alert(data.message);
   }).catch(e => console.log(e.message))
});