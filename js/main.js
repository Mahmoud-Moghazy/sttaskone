const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const navLink = document.querySelectorAll('.nav-links li a');
const navbar = document.querySelector('.navbar');

// Function to toggle the navbar menu on small screen
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Function to remove 'active' class from all links and add to clicked link
navLink.forEach(link => {
    link.addEventListener('click', function () {
        // Remove 'active' class from all links
        navLink.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        this.classList.add('active');
    });
});

// Function to set the top property of the nav-links based on navbar height
function adjustNavLinksTop() {
    const navbarHeight = navbar.offsetHeight; // Get the height of the navbar
    navLinks.style.top = `${navbarHeight +1}px`; // Set the top property to the navbar height
}

// Call the function on page load
adjustNavLinksTop();

// Call the function on window resize in case the navbar height changes
window.addEventListener('resize', adjustNavLinksTop);