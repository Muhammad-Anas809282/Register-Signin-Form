const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});


// Registration Form
const registerForm = document.querySelector(".form-box.register form");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = registerForm.querySelector('input[type="text"]').value;
  const email = registerForm.querySelector('input[type="email"]').value;
  const password = registerForm.querySelector('input[type="password"]').value;

  if (!username || !email || !password) {
    alert("Please fill all details");
    return;
  }

  const user = { username, email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration Successful!");
  container.classList.remove("active");
  registerForm.reset();
});


// Login Form
const loginForm = document.querySelector(".form-box.login form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = loginForm.querySelector('input[type="text"]').value;
  const password = loginForm.querySelector('input[type="password"]').value;

  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No user found! Please register first.");
    return;
  }

  if (username === savedUser.username && password === savedUser.password) {
    alert("Login Successful!");
  } else {
    alert("Incorrect username or password");
  }

  loginForm.reset();
});
