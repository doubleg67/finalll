const nav = document.querySelector(".main-nav");
const navItems = document.querySelectorAll(".nav__link");
const logo = document.querySelector(".logo");
const shMain = document.querySelector(".sh-main");
const imgs = document.querySelectorAll(".step-img");
const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");
const yearEL = document.querySelector(".year");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const learnBtn = document.querySelector(".btn--outline");
const navCta = document.querySelector(".nav-cta");
const codeDiv = document.querySelector(".code");
const code = document.querySelector(".code-text");
const password = document.querySelector(".password-text");
const closeCircle = document.querySelector(".circle-close");
const cookies = document.querySelector(".cookies-box");
const nameInput = document.querySelector(".name-input");
const codeInput = document.querySelector(".code-input");
const passwordInput = document.querySelector(".password-input");
const formName = document.querySelector(".porsche-id");
const logInBtn = document.querySelector(".login-btn");
const formInputs = document.querySelectorAll(".form-box input");
const btnModal = document.querySelector(".btn--modal");
const form = document.querySelector(".modal__form");
const btnShow = document.querySelector(".choose-show");
const brand = document.querySelector(".brand");
const color = document.querySelector(".color");
const year = document.querySelector(".select-year");
const selectedPorsche = document.querySelector(".selected-porsche");
const porscheImages = document.querySelector(".porsche-images");
const porscheImg = document.querySelector(".porsche-img");
const tableWrapper = document.querySelector(".table-wrapper");
const dealerBtn = document.querySelector(".dealer-btn");
const sectionHow = document.querySelector(".section-how");
const section = document.querySelector(".section");
const head = document.querySelector(".first-heading");
const hiwText = document.querySelector(".hiw-text");
const notSure = document.querySelector(".not-sure");
const secondHeading = document.querySelector(".second-heading");
const sectionPricing = document.querySelector(".section-pricing");
const halfOpacity = document.querySelector(".half-opacity-text");
const halfOpacityHeading = document.querySelector(".half-opacity-heading");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const allLinks = document.querySelectorAll("a:link");
const browseBtn = document.querySelector(".browse-btn");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

nav.addEventListener("mouseover", function (event) {
  if (event.target.classList.contains("nav__link")) {
    navItems.forEach(function (link) {
      if (link !== event.target) {
        link.classList.add("op");
      }
    });
    logo.classList.add("op");
  }
  0;
});

nav.addEventListener("mouseout", function () {
  navItems.forEach(function (link) {
    link.classList.remove("op");
  });
  logo.classList.remove("op");
});

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile nav
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

// Sticky navigation
function handleIntersection(entries, classToAdd) {
  const ent = entries[0];
  if (!ent.isIntersecting) {
    document.body.classList.add(classToAdd);
  } else {
    document.body.classList.remove(classToAdd);
  }
}

// IntersectionObserver
// Helper function to handle transform style when an element intersects the viewport
function handleIntersectionTransform(entries, target, transformValue) {
  const ent = entries[0];
  if (ent.isIntersecting) {
    target.style.transform = transformValue;
  }
}

// Helper function to handle opacity style when an element intersects the viewport
function handleIntersectionOpacity(entries, target, opacityValue) {
  const ent = entries[0];
  if (ent.isIntersecting) {
    target.style.opacity = opacityValue;
  }
}

// Helper function to observe intersection and call the appropriate handler
function observeIntersection(selector, callback, options) {
  const element = document.querySelector(selector);
  const observer = new IntersectionObserver(callback, options);
  observer.observe(element);
}

// Observing intersections and applying transformations
observeIntersection(".section-hero", (entries) =>
  handleIntersection(entries, document.body, "sticky")
);

observeIntersection(".section-how", (entries) =>
  handleIntersectionTransform(entries, head, "translateX(0px)")
);

observeIntersection(".section-how", (entries) =>
  handleIntersectionTransform(entries, hiwText, "translateX(0px)")
);

observeIntersection(".section", (entries) =>
  handleIntersectionTransform(entries, notSure, "translateX(0px)")
);

observeIntersection(".section", (entries) =>
  handleIntersectionTransform(entries, secondHeading, "translateX(0px)")
);

observeIntersection(".section-pricing", (entries) =>
  handleIntersectionOpacity(entries, halfOpacity, 1)
);

observeIntersection(".section-pricing", (entries) =>
  handleIntersectionOpacity(entries, halfOpacityHeading, 1)
);

formName.addEventListener("blur", function (e) {
  e.preventDefault();
  let fValue = formName.value;
  let splitedValue = fValue.split(" ");
  splitedValue = splitedValue.map(function (item) {
    return item[0].toUpperCase() + item.slice(1);
  });
  const updatedName = splitedValue.join(" ");
  formName.value = updatedName;
});

document.addEventListener("DOMContentLoaded", function () {
  if (!sessionStorage.getItem("cookiesShown")) {
    cookies.classList.remove("hidden");
  }
});

function setCookiesShown() {
  sessionStorage.setItem("cookiesShown", true);
}

closeCircle.addEventListener("click", function (e) {
  e.preventDefault();
  cookies.classList.add("hidden");
  setCookiesShown();
});

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

learnBtn.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

logInBtn.addEventListener("click", function (e) {
  e.preventDefault();
  formInputs.forEach((input) => {
    if (input.value === "") {
      input.classList.add("shake-effect");
      input.style.borderColor = "red";
      inputsEmpty = true;

      setTimeout(function () {
        input.classList.remove("shake-effect");
        input.style.borderColor = "";
      }, 1000);
    }
  });
});

dealerBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.location.href = "exclusive.html";
});
