let currentImageIndex = 0;
const images = document.querySelectorAll('#carousel img');
const totalImages = images.length;

function showNextImage() {
  // Resetear las posiciones de todas las imágenes
  images.forEach((img, index) => {
    img.style.transform = `translateX(${(index - currentImageIndex) * 62}px)`; 
  });

  // Avanza al siguiente índice
  currentImageIndex = (currentImageIndex + 1) % totalImages;
}

// Ejecuta la función cada 3 segundos
setInterval(showNextImage, 1000);
