let form=document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    let username=document.querySelector("#user");
    let password=document.querySelector("#pass");
    console.log("Username: ", username.value);
    console.log("Password: ", password.value);
});