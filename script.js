/* Function to open the sidebar (for mobile view) */
function openNav() {
  document.getElementById("mySidebar").style.width = "280px";
  // Only shift main content on larger screens for better UX
  if (window.innerWidth > 768) {
    document.getElementById("main").style.marginLeft = "280px";
  } else {
    // Hide the open button when the sidebar is open on mobile
    document.querySelector('.openbtn').style.display = 'none';
  }
}

/* Function to close the sidebar */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  // Show the open button when the sidebar is closed on mobile
  if (window.innerWidth <= 768) {
    document.querySelector('.openbtn').style.display = 'block';
  }
}

/* Add logic to close the sidebar when an internal link is clicked (UX improvement for mobile) */
document.querySelectorAll('.sidebar a').forEach(item => {
    item.addEventListener('click', () => {
        // Check if the link is a section link (starts with '#') and it's a small screen
        if (item.getAttribute('href').startsWith('#') && window.innerWidth <= 768) {
            closeNav();
        }
    });
});