
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" ||
        password === "" || confirm === "") {
        message.innerHTML = "Please fill all fields.";
        return false;
    }

    if (password.length < 6) {
        message.innerHTML = "Password must have at least 6 characters.";
        return false;
    }

    if (password !== confirm) {
        message.innerHTML = "Passwords do not match.";
        return false;
    }

    message.innerHTML = "Signup successful!";
    return false;
}


