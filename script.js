//Toggle clas active for Search Form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
//when search is clicked
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

//Toggle clas active for Shopping Cart
const shoppingCart = document.querySelector('.shopping-cart');
//when shopping cart is clicked
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

//Toggle class active for Hamburger Menu
const navbarNav = document.querySelector('.navbar-nav');
//when hamburger menu is clicked
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

//click outside of element
const hm = document.querySelector('#hamburger-menu');
const sb= document.querySelector('#search-button');
const sc= document.querySelector('#shopping-cart-button');

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

//Swiper activation for popular and latest shoes
var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
slidesPerView: 'auto',

coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
},
 
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
});


// Modal Box - Open and Close
function openModal(e) {
  const modal = document.getElementById("item-detail-modal");
  modal.style.display = "flex";
  if (e) {
    e.preventDefault();
  }
}

function closeModal() {
  const modal = document.getElementById("item-detail-modal");
  modal.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
  const viewMoreLink = document.querySelector(".view-more");
  const closeIcon = document.querySelector(".close-icon");
  const modal = document.getElementById("item-detail-modal");

  if (viewMoreLink) {
    viewMoreLink.addEventListener("click", function(e) {
      openModal(e);
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", function() {
      closeModal();
    });
  }
});


//Validation for Subscribe Page
function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var checkbox = document.getElementById("checkbox").checked;

  // Validation empty
  if (username == "") {
    alert("Username cannot be empty");
  }

  // Validation email -> must end with @gmail.com
  else if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
  }
  // Validation phone -> must start with 0
  else if (phone.charAt(0) != 0) {
    alert("Phone number must start with '0'");
  }
  // Validation dropdown
  else if (country == "empty") {
    alert("Country can't be empty");
  }
  // Validation checkbox
  else if (!checkbox) {
    alert("Terms and conditions must be agreed to");
  } else {
    alert("Form submitted successfully");
  }
}
