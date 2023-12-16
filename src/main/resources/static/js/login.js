const login = document.querySelector("#login");
const login_bg = document.querySelector(".login-bg");
login.addEventListener("click", () => {
    login_bg.classList.toggle("active");
});

login_bg.addEventListener("click", (e) => {
    if (e.target == login_bg) {
        login_bg.classList.toggle("active");
    }
});

