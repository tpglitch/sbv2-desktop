// Function to close the window
function closeWindow() {
    window.close();
  }
  
  // Event listener for 'Escape' key press
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeWindow();
    }
  });
  