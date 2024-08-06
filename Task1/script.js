function toggleMenu() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const errorMessage = document.getElementById('error-message');

    if (name == "" || email == "" || phone == "") {
        errorMessage.textContent = "Please fill out all fields.";
        return false;
    } else {
        errorMessage.textContent = "";
        alert("Thank you for registering for our event!");
        return true;
    }
}
