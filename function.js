function formValidation() {
  event.preventDefault();
  let userNameVal = userNameField.value;
  let passVal = passField.value;
  let emailVal = emailField.value;
  let errors = [];

  if (userNameVal.length > 20) {
    userNameField.style.border = "2px solid red";
    errors.push("<p>Predugačko korisničko ime</p>");

  }
  if (passVal !== "12345") {
    passField.style.border = "2px solid red";
    errors.push("<p>Pogrešna lozinka</p>");
  }
  if (emailVal.indexOf("@gmail.com") == -1) {
    emailField.style.border = "2px solid red";
    errors.push("<p>Molim vas da unesete gmail</p>");
  }
  if (errors.length == 0) {
    myForm.submit()
  } else {
    for (let i = 0; i < errors.length; i++) {
      errorsDiv.innerHTML += errors[i];
    }

  }
}