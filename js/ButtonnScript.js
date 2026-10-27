const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("signInForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("password").value;

    if (email === "admin@gmail.com" && pass === "1234") {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "pages/home/home.html";
    } else {
        alert("Invalid login");
    }
});