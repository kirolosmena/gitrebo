const form = document.getElementById("form");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const email = document.getElementById("email");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerHTML = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function validateEmail(input) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function checkRequired(inpArr) {
  inpArr.forEach(function (input) {
    if (input.value == "") {
      showError(input, `${getFieldId(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}

function getFieldId(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLenght(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getFieldId(id)} must be at least ${min} character`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldId(id)} is must be less than ${max} character`);
  } else {
    showSuccess(input);
  }
}

function checkMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `${getFieldId(input2)} Dont Match`);
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName, password2, password, email]);
  checkMatch(password, password2);
  checkLenght(userName, 3, 15);
  checkLenght(password, 8, 30);
});
