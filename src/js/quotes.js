console.info('JS FILE:', 'js/quotes.js');

// MENU
document.getElementById('openNav').onclick = function() {
  document.getElementById("mainNav").style.height = "100%";
  document.getElementById("openNav").style.display = "none";
  document.getElementById("carousel-indicators").style.display = "none";
};
document.getElementById('closeNav').onclick = function() {
  document.getElementById("mainNav").style.height = "0%";
  document.getElementById("openNav").style.display = "inline-block";
  document.getElementById("carousel-indicators").style.display = "inline-block";
};