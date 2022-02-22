import "./css/style.css";

const $form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const $zipcode = document.getElementById("zip");
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const confirmpassword = document.getElementById("confirmpassword");
const confirmPasswordError = document.querySelector(
  "#confirmpassword + span.error"
);
var regexForLettersOnly = /^[a-zA-Z]+$/;

email.addEventListener("input", function (e) {
  if (mail.validity.valid) {
    emailError.textContent = "";
    checkErrors("email");
  } else {
    checkErrors("email");
  }
});
country.addEventListener("input", function (e) {
  if (country.validity.valid) {
    countryError.textContent = "";
    checkErrors("country");
  } else {
    checkErrors("country");
  }
});

confirmpassword.addEventListener("input", function (e) {
  if (password.validity.valid) {
    confirmPasswordError.textContent = "";
    checkErrors("confirmpassword");
  } else {
    checkErrors("confirmpassword");
  }
});
$form.addEventListener("submit", function (event) {
  // if the email field is valid, we let the form submit

  if (
    checkErrors("email") == false &&
    checkErrors("country") == false &&
    checkErrors("confirmpassword") == false
  ) {
    return window.alert("nice");
  } else {
    event.preventDefault();
    window.alert("hey");
  }
});
function checkErrors(type) {
  if (type == "email") {
    if (email.validity.valueMissing) {
      emailError.textContent = "You need to enter an email adress";
      addInvalidClass(confirmpassword);
      return true;
    } else if (email.validity.typeMismatch) {
      emailError.textContent = "Type mismatch";
      addInvalidClass(confirmpassword);
      return true;
    } else if (email.validity.tooShort) {
      emailError.textContent = "Too short";
      addInvalidClass(confirmpassword);
      return true;
    } else {
      removeInvalidClass(confirmpassword);
      return false;
    }
  } else if (type == "country") {
    if (!country.value.match(regexForLettersOnly)) {
      countryError.textContent = "letters only";
      addInvalidClass(confirmpassword);
      return true;
    } else {
      removeInvalidClass(confirmpassword);
      return false;
    }
  } else if (type == "confirmpassword") {
    if (confirmpassword.value != password.value) {
      confirmPasswordError.textContent = "gotta insert the same password";
      addInvalidClass(confirmpassword);
      return true;
    } else {
      removeInvalidClass(confirmpassword);
      return false;
    }
  }
}

function addInvalidClass(element) {
  element.classList.add("invalid");
}
function removeInvalidClass(element) {
  element.classList.remove("invalid");
}
