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
let login = document.getElementById("login");
let em = document.getElementById("username");
let pw = document.getElementById("password");
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
  } else {
    usernameError.innerHTML = "";
  }
  // username and password check

  login.onsubmit = function (f) {
    f.preventDefault();
    let users = JSON.parse(localStorage.username);
    for (let i = 0; i < users.length; i++) {
      if (em.value.trim() == users[i].email && pw.value.trim() == users[i].ps) {
        alert("Login success!");
      }
    }
  };
};
