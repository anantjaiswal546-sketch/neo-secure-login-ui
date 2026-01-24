function togglePassword(id) {
  const input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

/* Switch Screens */
function showForgot() {
  hideAll();
  document.getElementById("forgotBox").style.display = "block";
}

function showSignup() {
  hideAll();
  document.getElementById("signupBox").style.display = "block";
}

function showLogin() {
  hideAll();
  document.getElementById("loginBox").style.display = "block";
}

function hideAll() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("forgotBox").style.display = "none";
  document.getElementById("signupBox").style.display = "none";
}

/* Login */
function login() {
  alert("Demo login successful 🚀");
}

/* Forgot Password */
function resetPassword() {
  const email = document.getElementById("forgotEmail").value;
  if (email === "") {
    alert("Please enter your email");
  } else {
    alert("Password reset link sent (demo) 📩");
    showLogin();
  }
}

/* Signup */
function signup() {
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("Please fill all fields");
  } else {
    alert("Account created successfully (demo) 🎉");
    showLogin();
  }
}

/* Password Strength */
const loginPass = document.getElementById("loginPassword");
const strengthBar = document.getElementById("strength-bar");

loginPass.addEventListener("input", () => {
  let s = 0;
  const v = loginPass.value;
  if (v.length > 5) s++;
  if (/[A-Z]/.test(v)) s++;
  if (/[0-9]/.test(v)) s++;
  if (/[^A-Za-z0-9]/.test(v)) s++;

  const colors = ["", "red", "orange", "yellow", "lime"];
  strengthBar.style.width = s * 25 + "%";
  strengthBar.style.background = colors[s];
});
