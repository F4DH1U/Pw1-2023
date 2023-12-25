function authenticate() {
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;

    if (usernameInput === "Fadhlu2023" && passwordInput === "student-nf23") {
        alert("Login successful");
        window.location.href = "success.html";
    } else {
        alert("Login failed. Please check your username and password.");
    }
}