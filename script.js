// JavaScript for burger menu functionality
const menuBtn = document.querySelector(".burger-menu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    document.addEventListener("click", outsideClickListener);
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    document.removeEventListener("click", outsideClickListener);
  }
});

function outsideClickListener(event) {
  const overlay = document.getElementById("overlay");
  if (!menuBtn.contains(event.target) && !overlay.contains(event.target)) {
    menuBtn.classList.remove("open");
    overlay.classList.remove("open");
    document.removeEventListener("click", outsideClickListener);
    menuOpen = false;
  }
}

function toggleOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.classList.toggle("open");
}

menuBtn.addEventListener("click", toggleOverlay);


// JS for dark mode toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  lightModeIcon.style.opacity = body.classList.contains("dark-mode") ? 0 : 1;
  darkModeIcon.style.opacity = body.classList.contains("dark-mode") ? 1 : 0;
});

// TYPEWRITER effect
const textElement = document.getElementById("name");
const sentences = ["Aryan Choudhary", "a Student", "a Front end web developer"];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = sentences[sentenceIndex];
  if (charIndex <= currentText.length) {
    textElement.innerHTML = currentText.substring(0, charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust the speed of typing by changing the timeout
  } else {
    // Wait for a pause before starting to delete
    setTimeout(() => {
      isDeleting = true;
      setTimeout(erase, 500); // Adjust the pause before erasing
    }, 1000); // Adjust the pause before starting to delete
  }
}

function erase() {
  const currentText = sentences[sentenceIndex];
  if (charIndex >= 0) {
    textElement.innerHTML = currentText.substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 50); // Adjust the speed of erasing by changing the timeout
  } else {
    // Move to the next sentence
    isDeleting = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    setTimeout(type, 500); // Adjust the pause before typing the next sentence
  }
}

// Call the type function when the page is loaded
document.addEventListener("DOMContentLoaded", type);


// CONTACT ME Form
function submitForm() {
  var form = document.getElementById('myForm');
  var formData = new FormData(form);

  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.setRequestHeader('Accept', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log('Thanks for your submission!');
        form.reset();
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    }
  };

  xhr.send(formData);
}

// scroll smoothly
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// scroll behaviour

document.addEventListener("DOMContentLoaded", function () {
  const contactSection = document.getElementById("contact");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // Adjust this threshold based on how much of the section should be visible
  };

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      } else {
        // Once not in the viewport, fade out
        entry.target.style.opacity = 0;
        entry.target.style.transition = "opacity 0.5s ease-out";
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);
  observer.observe(contactSection);
});
