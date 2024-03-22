var slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next or previous slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to display a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display slides
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  // Remove the active class from all dots
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  // Display the current slide and add the active class to the corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
