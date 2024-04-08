const buttons = document.querySelectorAll(".button");
const registerForm = document.querySelector(".register-form");
const loginForm = document.querySelector(".login-form");
const title = document.querySelector(".title-form");
const eyesBtn = document.querySelectorAll(".eye-btn");
const links = document.querySelectorAll(".link");
const registerbtn = document.querySelector(".register-btn");
const loginbtn = document.querySelector(".login-btn");
const messages = document.querySelectorAll(".message-alert");

const emailLoginInput = document.getElementById("email-login-input");
const emailLoginAlert = document.getElementById("email-login-alert");
const passwordLoginInput = document.getElementById("password-login-input");
const passwordLoginAlert = document.getElementById("password-login-alert");
const emailRegisterInput = document.getElementById("email-register-input");
const emailRegisterAlert = document.getElementById("email-register-alert");
const passwordRegisterInput = document.getElementById(
  "password-register-input"
);
const passwordRegisterAlert = document.getElementById(
  "password-register-alert"
);
const confrimPasswordRegisterInput = document.getElementById(
  "confrim-password-register-input"
);
const confrimPasswordRegisteralert = document.getElementById(
  "confrim-password-register-alert"
);

buttons.forEach((button, i) => {
  button.addEventListener("click", (e) => {
    messages.forEach((message) => {
      message.innerText = "";
    });
    const target = e.target.innerText.toLowerCase();
    if (target === "register") {
      resetBtn();
      openRegisterForm(e);
    } else {
      resetBtn();
      openLoginForm(e);
    }
  });
});

function resetBtn() {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });
}
function openRegisterForm(e) {
  registerForm.classList.add("show");
  loginForm.classList.remove("show");
  e.target.classList.add("active");
  title.innerText = "Register Form";
}
function openLoginForm(e) {
  registerForm.classList.remove("show");
  loginForm.classList.add("show");
  e.target.classList.add("active");
  title.innerText = "Login Form";
}

eyesBtn.forEach((eyeBtn) => {
  eyeBtn.addEventListener("click", () => {
    const child = eyeBtn.children[0];
    if (child.classList.contains("bi-eye")) {
      child.className = "bi bi-eye-slash";
      eyeBtn.previousElementSibling.type = "text";
    } else {
      child.className = "bi bi-eye";
      eyeBtn.previousElementSibling.type = "password";
    }
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.link === "register") {
      registerbtn.click();
    } else {
      loginbtn.click();
    }
  });
});

// *********************************************
// validation login form
loginForm.addEventListener("submit", (e) => {
  if (!loginValidate()) {
    e.preventDefault();
  }
});

emailLoginInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailLoginInput.value.match(emailFormat)) {
    emailLoginAlert.innerText = "Enter valid email baby! 😐";
    emailLoginInput.classList.add("wrong-input");
  } else {
    emailLoginAlert.innerText = "";
    emailLoginInput.classList.remove("wrong-input");
  }
});

passwordLoginInput.addEventListener("input", () => {
  if (passwordLoginInput.value.length < 6) {
    passwordLoginAlert.innerText = "Enter more than 6 character! 😑";
    passwordLoginInput.classList.add("wrong-input");
  } else {
    passwordLoginAlert.innerText = "";
    passwordLoginInput.classList.remove("wrong-input");
  }
});

function loginValidate() {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailLoginInput.value.match(emailFormat)) {
    emailLoginAlert.innerText = "Enter valid email baby! 😐";
    emailLoginInput.classList.add("wrong-input");
    return false;
  }
  if (passwordLoginInput.value.length < 6) {
    passwordLoginAlert.innerText = "Enter more than 6 character! 😑";
    passwordLoginInput.classList.add("wrong-input");
    return false;
  }
  return true;
}

// validation register form

registerForm.addEventListener("submit", (e) => {
  if (!registerValidate()) {
    e.preventDefault();
  }
});

emailRegisterInput.addEventListener("input", () => {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegisterInput.value.match(emailFormat)) {
    emailRegisterAlert.innerText = "Enter valid email baby! 😐";
    emailRegisterInput.classList.add("wrong-input");
  } else {
    emailRegisterAlert.innerText = "";
    emailRegisterInput.classList.remove("wrong-input");
  }
});

passwordRegisterInput.addEventListener("input", () => {
  if (passwordRegisterInput.value.length < 6) {
    passwordRegisterAlert.innerText = "Enter more than 6 character! 😑";
    passwordRegisterInput.classList.add("wrong-input");
  } else {
    passwordRegisterAlert.innerText = "";
    passwordRegisterInput.classList.remove("wrong-input");
    checkMatchPassword();
  }
});

confrimPasswordRegisterInput.addEventListener("input", () => {
  if (confrimPasswordRegisterInput.value.length < 6) {
    confrimPasswordRegisteralert.innerText = "Enter more than 6 character! 😑";
    confrimPasswordRegisterInput.classList.add("wrong-input");
  } else {
    confrimPasswordRegisteralert.innerText = "";
    confrimPasswordRegisterInput.classList.remove("wrong-input");
    checkMatchPassword();
  }
});

function checkMatchPassword() {
  if (confrimPasswordRegisterInput.value != passwordRegisterInput.value) {
    confrimPasswordRegisteralert.innerText = "Passwords Does'nt Match!";
    confrimPasswordRegisterInput.classList.add("wrong-input");
    return false;
  } else {
    confrimPasswordRegisteralert.innerText = "";
    confrimPasswordRegisterInput.classList.remove("wrong-input");
    return true;
  }
}

function registerValidate() {
  const emailFormat =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegisterInput.value.match(emailFormat)) {
    emailRegisterAlert.innerText = "Enter valid email baby! 😐";
    emailRegisterInput.classList.add("wrong-input");
    return false;
  }
  if (passwordRegisterInput.value.length < 6) {
    passwordRegisterAlert.innerText = "Enter more than 6 character! 😑";
    passwordRegisterInput.classList.add("wrong-input");
    return false;
  }
  if (confrimPasswordRegisterInput.value.length < 6) {
    confrimPasswordRegisteralert.innerText = "Enter more than 6 character! 😑";
    confrimPasswordRegisterInput.classList.add("wrong-input");
    return false;
  }
  if (
    passwordRegisterInput.value.length > 6 ||
    confrimPasswordRegisterInput.value.length > 6
  ) {
    return checkMatchPassword();
  }
  return true;
}
