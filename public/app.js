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

const errorAlert = async(textData) => {
  await Toastify({
  text: textData,
  duration: 5000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "right", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #ff5f6d, #ffc371)",
  },
// Callback after click
}).showToast();
}

const dataAlert = async(textData) => {
  await Toastify({
        text: textData,
        duration: 5000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #18ff20, #00d4ff)",
        },
      // Callback after click
      }).showToast();
}
// Example POST method implementation:
async function postData(url = "",data= {}) {
  try {
  // Default options are marked with *
  const response = await fetch(url,
                               {
                                 method: "POST",
                                 headers: {
  "Content-Type": "application/json",
  "Accept": "application/json"
                                 },
  body:JSON.stringify(data)  
                               });
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
  try{
  e.preventDefault();
let data = await postData(`${sign_up_form.action}`,{
  "email":sign_up_email.value,
  "password":sign_up_password.value,
  "username":sign_up_name.value,
  "phone":sign_up_phone.value
})
  if(data.status === "successful!"){
    container.classList.remove("sign-up-mode");
   await dataAlert(data.message)
    } else if(data.status === "failed!"){
    data.message.map(async(data) => {
      await errorAlert(data.message)
    })
  }
} catch(err) {
    console.log(err)
    await errorAlert(err.message)
  }
});

sign_in_form.addEventListener("submit", async(e) => {
  try{
  e.preventDefault();
let data = await postData(`${sign_in_form.action}`,{
    "email":sign_in_email.value,
    "password":sign_in_password.value
  })
    if(data.status === "successful!"){
   await dataAlert(data.message)
    } else if(data.status === "failed!") {
      data.message.map(async(data) => {
        await errorAlert(data.message)
      })
    }
  } catch (err) {
    cnosole.log(err)
    await errorAlert(err.message)
  }
});