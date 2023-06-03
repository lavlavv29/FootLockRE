//Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  console.log(navbarNav.classList.contains("active"));
};

//untuk menghilangkan sidebar tanpa klik hamburger menu
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
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

// Modal Box
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

  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });
});



//Validation for Subscribe Page
function validateForm() {
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var country = document.getElementById("country").value;
  var checkbox = document.getElementById("checkbox").checked;

  // Validasi kosong
  if (username == "") {
    alert("Username cannot be empty");
  }

  // Validasi email -> akhirnya harus @gmail.com
  else if (!email.endsWith("@gmail.com")) {
    alert("Email must end with @gmail.com");
  }
  // Validasi phone -> harus dimulai dari 0
  else if (phone.charAt(0) != 0) {
    alert("Phone number must start with '0'");
  }
  // Validasi dropdown
  else if (country == "empty") {
    alert("Country can't be empty");
  }
  // Validasi checkbox
  else if (!checkbox) {
    alert("Terms and conditions must be agreed to");
  } else {
    alert("Form submitted successfully");
  }
}
