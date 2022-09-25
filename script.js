const square = document.querySelector('.square');

square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.container-md'));


// scrolling to top

// var btn = $('#scroll-top');

var btn = document.getElementById('scroll-top')

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '800');
});







