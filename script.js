function toggleMenu() {
  var mobileMenu = document.querySelector('.mobile-menu');
  var closeButton = mobileMenu.querySelector('.close-button');

  // If close button doesn't exist, create and append it
  if (!closeButton) {
      closeButton = document.createElement('div');
      closeButton.className = 'close-button';
      closeButton.innerHTML = '<i class="fas fa-times white"></i>';
      mobileMenu.appendChild(closeButton);
  }

  if (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') {
      mobileMenu.style.display = 'flex';
  } else {
      mobileMenu.style.display = 'none';
      mobileMenu.removeChild(closeButton);
  }

  // Add an event listener to the close button
  closeButton.addEventListener('click', function () {
      mobileMenu.style.display = 'none';
      mobileMenu.removeChild(closeButton);
  });
}
