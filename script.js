function toggleMenu() {
    const links = document.getElementById('navLinks');
    const toggle = document.getElementById('menuToggle');
    
    links.classList.toggle('active');
    toggle.classList.toggle('open');
}

// Close side menu if the user clicks anywhere else on the screen
document.addEventListener('click', function(event) {
    const links = document.getElementById('navLinks');
    const toggle = document.getElementById('menuToggle');
    
    // Check if the click was outside the menu and the hamburger icon
    if (!links.contains(event.target) && !toggle.contains(event.target)) {
        links.classList.remove('active');
        toggle.classList.remove('open');
    }
});
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    const captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imgElement.src; // Sets the popup image to the clicked image
    captionText.innerHTML = imgElement.alt; // Uses the 'alt' text as a caption
}

function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Close modal if user clicks anywhere outside the image
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}