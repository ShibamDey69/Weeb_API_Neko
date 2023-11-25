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
postData(`${sign_up_form.action}?email=${sign_up_email.value}&username=${sign_up_name.value}&phone=${sign_up_phone.value}&password=${sign_up_password.value}`).then((data) => {
  alert(data.message)
}).catch(e => {
    alert("error")
}) ;
});

sign_in_form.addEventListener("submit", async(e) => {
  e.preventDefault();
  postData(`${sign_in_form.action}?email=${sign_in_email.value}&password=${sign_in_password.value}`).then((data) => {
    if(data.status === "successful!"){
    alert(`api_key=${data.api_key}`);
    } else {
      alert(data.message)
    }
   }).catch(e => alert(e.message))
});