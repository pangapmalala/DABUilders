// Form validation function
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Check if the name, email, and message are not empty
    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out.");
        return false;
    }
    // If all fields are filled out, return true (submit the form)
    return true;
}
// Smooth scrolling function for anchor links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior (jumping)
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Toggle navigation menu for mobile
const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', function() {
    navList.classList.toggle('show');
});
