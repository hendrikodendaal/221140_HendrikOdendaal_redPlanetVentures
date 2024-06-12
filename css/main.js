document.addEventListener('DOMContentLoaded', function() {
  const subtractButtons = document.querySelectorAll('.subtract');
  const addButtons = document.querySelectorAll('.add');
  const quantityInputs = document.querySelectorAll('.quantity input');
  const starsContainers = document.querySelectorAll('.rating');

  subtractButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentValue = parseInt(quantityInputs[index].value);
      if (currentValue > 1) {
        quantityInputs[index].value = currentValue - 1;
      }
    });
  });

  addButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const currentValue = parseInt(quantityInputs[index].value);
      quantityInputs[index].value = currentValue + 1;
    });
  });

  starsContainers.forEach((container, sectionIndex) => {
    const stars = container.querySelectorAll('.star');
    stars.forEach((star, starIndex) => {
      star.addEventListener('click', function() {
        setRating(starIndex + 1, sectionIndex);
      });
    });
  });
});

function setRating(rating, sectionIndex) {
  const stars = document.querySelectorAll('.rating')[sectionIndex].querySelectorAll('.star');
  stars.forEach((star, index) => {
    if (index + 1 <= rating) {
      star.classList.add('filled');
    } else if (index < rating) {
      star.classList.add('half-filled');
    } else {
      star.classList.remove('filled', 'half-filled');
    }
  });
  console.log('User rated ' + rating + ' stars for section ' + sectionIndex);
}

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slider-wrapper').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatically show the first slide on page load
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

function bookNow(button) {
  // Get the quantity input value
  const quantityContainer = button.parentElement.querySelector('.quantity-container');
  const quantityInput = quantityContainer.querySelector('input[type="number"]');
  const quantity = quantityInput.value;

  // Create a confirmation message
  const confirmationMessage = `Do you want to book ${quantity} unit(s)?`;

  // Show a confirmation dialog
  if (confirm(confirmationMessage)) {
      alert(`Booking ${quantity} unit(s) confirmed!`);
      // Add further booking logic here
  } else {
      alert('Booking cancelled.');
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user submits the form, display the modal
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  modal.style.display = "block"; // Display the modal
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}