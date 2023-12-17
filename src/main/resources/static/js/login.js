const login = document.querySelector("#login");
const login_bg = document.querySelector(".modal-bg");
login.addEventListener("click", () => {
    login_bg.classList.toggle("active");
});

login_bg.addEventListener("click", (e) => {
    if (e.target == login_bg) {
        login_bg.classList.toggle("active");
    }
});

const requestLogin = () => {
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    const data = {
        username: username,
        password: password
    };
    fetch("https://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include", 
        body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
            if (res.success) {
                alert(res.message);
            } else {
                alert(res.message);
            }
        });
}

