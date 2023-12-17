const register = document.querySelector("#register");
const register_bg = document.querySelector("#modal-reg");
register.addEventListener("click", () => {
    register_bg.classList.toggle("active");
});

register_bg.addEventListener("click", (e) => {
    if (e.target == register_bg) {
        register_bg.classList.toggle("active");
    }
});

const requestResister = () => {
    const username = document.querySelector("#username-reg").value;
    const password = document.querySelector("#password-reg").value;
    const data = {
        username: username,
        password: password,
        role: "ROLE_USER"
    };
    fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
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

