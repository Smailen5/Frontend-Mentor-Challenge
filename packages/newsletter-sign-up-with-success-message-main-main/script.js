const mainContent = document.getElementById("main");
const successMessage = document.getElementById("success-message");
const dismissButton = document.getElementById("dismiss-button");
const errorMessage = document.getElementById("error");
const inputEmail = document.getElementById("email-user");
const emailUserConfirm = document.getElementById("email-confirmation");

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  //   console.log(data);
  validator(data);
  //   console.log(data.email)
}

mainContent.addEventListener("submit", handleSubmit);

const validator = (data) => {
  // regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.email === "") {
    addTextError("Please enter an email address");
  } else if (!emailPattern.test(data.email)) {
    addTextError("Please enter a valid email address");
  } else {
    removeTextError();
    emailUserConfirm.innerText = data.email;
    successMessage.classList.remove("hidden");
    successMessage.classList.add("lg:flex");
    mainContent.style.display = "none";
  }
};

dismissButton.addEventListener("click", () => {
  location.reload();
});
function removeTextError() {
  errorMessage.innerText = "";
  inputEmail.classList.remove("border-tomato");
  inputEmail.classList.remove("bg-tomato-light");
  inputEmail.classList.remove("text-tomato");
}

function addTextError(message) {
  errorMessage.innerText = message;
  inputEmail.classList.add("border-tomato");
  inputEmail.classList.add("bg-tomato-light");
  inputEmail.classList.add("text-tomato");
}
