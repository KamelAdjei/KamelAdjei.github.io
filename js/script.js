window.onload = function() {
  currentYear();
};

function currentYear(){
  const date = new Date();
  const automaticDate = document.querySelector('#automaticDate');
  automaticDate.textContent = date.getFullYear();//automatically change the year based on the current date
};

const navBrand = document.querySelector('.navbar-brand');//making nav-brand BounceIn
navBrand.addEventListener('mouseenter', addBounce);
navBrand.addEventListener('animationend', removeBounce);

const navLinks = document.querySelectorAll('.nav-link');//making nav-links BounceIn
navLinks.forEach(navLink => navLink.addEventListener('mouseenter', addBounce));
navLinks.forEach(navLink => navLink.addEventListener('animationend', removeBounce));

function addBounce(e){//initiating the action
  this.classList.add('animated', 'bounceIn');
}

function removeBounce(e){//disabling the action
  this.classList.remove('animated', 'bounceIn');
}
