//   alert("abcd")
// const num1 = 4
// console.log(num1 + 1)
// console.log(num1 - 1)
// console.log(num1 * 1)
// console.log(num1 / 1)
// console.log(num1 % 1)
// console.log(num1 ** 1)
// const myName = "A B C D"
// console.log(myName)
// const num1 = 3;
// if (num1 / 2) {
//   console.log("so nay chia het cho 2");
// } else {
//   console.log("so nay khong chia het cho 2");
// }
// loginBtn.innerHTML = "test";
// console.log(loginBtn.innerHTML);
const loginBtn = document.getElementById("login-btn");
const username = document.getElementById("username");
const password = document.getElementById("password");
const loginError = document.getElementById("login-error");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
let lowercase = /[a-z]/g;
let uppsercase = /[A-Z]/g;
let numbers = /[0-9]/g;

loginBtn.onclick = function () {
  // username check
  if (username.value === "") {
    usernameError.innerHTML = "Please fill in your username";
  } else {
    usernameError.innerHTML = "";
  }
  // password check
  if (password.value === "") {
    passwordError.innerHTML = "Please fill in your password";
  } else if (!password.value.trim().match(lowercase)) {
    loginError.innerHTML = "Password must have at least one lowercase letter";
  } else if (!password.value.trim().match(uppsercase)) {
    loginError.innerHTML = "Password must have at least one uppercase letter";
  } else if (!password.value.trim().match(numbers)) {
    loginError.innerHTML = "Password must have at least one number";
  } else {
    LCcheck();
    usernameError.innerHTML = "";
  }

  function LCcheck() {
    if (localStorage.username) {
      let users = JSON.parse(localStorage.username);
      users.push({
        email: email.value.trim(),
        ps: ps.value.trim(),
      });
      localStorage.setItem("username", JSON.stringify(users));
    } else {
      localStorage.setItem(
        "username",
        JSON.stringify([{ email: email.value.trim(), ps: ps.value.trim() }])
      );
      alert("Account created!");
      location.replace("../login/login.html");
    }
  }
};
