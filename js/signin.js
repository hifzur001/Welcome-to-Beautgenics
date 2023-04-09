const passwordInput = document.querySelector("#password")
const eye = document.querySelector("#eye")
eye.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
})
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent form submission

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // validate name field
    if (nameValue === '') {
        alert('Please enter a name.');
        return;
    }

    // validate email field
    if (emailValue === '') {
        alert('Please enter an email address.');
        return;
    } else if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
    }

    // form is valid - submit to server
    alert('Form submitted successfully!');
    form.submit();
});

// function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
