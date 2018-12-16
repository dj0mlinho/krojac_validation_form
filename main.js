let userNameField = document.querySelectorAll("input")[0];
let passField = document.querySelectorAll("input")[1];
let emailField = document.querySelectorAll("input")[2];
let submitBtn = document.querySelectorAll("input")[3];
let myForm = document.querySelector("form");
let errorsDiv = document.querySelector(".errors");
submitBtn.addEventListener('click', formValidation)