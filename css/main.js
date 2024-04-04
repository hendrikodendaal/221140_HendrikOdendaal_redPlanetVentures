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