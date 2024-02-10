document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const loginForm = document.getElementById("login-form");
if(registrationForm){
    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = registrationForm.elements["username"].value;
        const email = registrationForm.elements["email"].value;
        const password = registrationForm.elements["password"].value;
        const confirmPassword = registrationForm.elements["confirm-password"].value;

        // Basic password confirmation validation
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Perform registration logic here, like saving to local storage or sending to server
        // Save registration data to local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        alert("Registration successful!");
        registrationForm.reset();
        // Perform some actions or conditions
// Redirect to login.html
window.location.href = "login.html";

    });
}
if(loginForm)
{
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = loginForm.elements["username"].value;
        const password = loginForm.elements["password"].value;

        // Retrieve registration data from local storage
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (username === savedUsername && password === savedPassword) {
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            alert("Invalid username or password");
        }

        loginForm.reset();
    });
}
});
