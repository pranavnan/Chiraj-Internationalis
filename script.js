"use strict";

// Scrolling into Sections
const howWeWorkBtn = document.querySelector(".btn-how-work");
const sectionHowWeWorkEl = document.querySelector(".section-work");
howWeWorkBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionHowWeWorkEl.scrollIntoView({ behavior: "smooth" });
});

const advantagesBtn = document.querySelector(".advantages-scroll-to");
const sectionAdvantagesEl = document.querySelector(".section-advantages");

advantagesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionAdvantagesEl.scrollIntoView({ behavior: "smooth" });
});

const ourExpertiesBtn = document.querySelector(".experties-btn");
const sectionServiceOfferingEl = document.querySelector(
  ".section-service-offering"
);

ourExpertiesBtn.addEventListener("click", function (e) {
  e.preventDefault();
  sectionServiceOfferingEl.scrollIntoView({ behavior: "smooth" });
});

const btnAboutUs = document.querySelector(".btn-about-us");
const sectionCertificateEl = document.querySelector(".section-certificate");

btnAboutUs.addEventListener("click", function (e) {
  e.preventDefault();
  sectionCertificateEl.scrollIntoView({ behavior: "smooth" });
});
//
const btnServicePatner = document.querySelector(".btn-service-patner");
const sectionServicePatner = document.querySelector(".delivered-services");

btnServicePatner.addEventListener("click", function (e) {
  e.preventDefault();
  sectionServicePatner.scrollIntoView({ behavior: "smooth" });
});

// How we work modal
const thirdInseption = document.querySelector(".third-inseption");
const thirdContentment = document.querySelector(".third-contentment");
const thirdSorting = document.querySelector(".third-sorting");
const thirdQuality = document.querySelector(".third-quality");
const thirdCS1 = document.querySelector(".third-cs1");
const qualityInseption = document.querySelector(".quality-inseption");
const thirdRework = document.querySelector(".third-rework");
const thirdGP12 = document.querySelector(".third-gp12");
const thirdSafeLunch = document.querySelector(".third-safe-lunch");
const thirdInfrared = document.querySelector(".third-infrared");

const modalWindow = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".close-modal");
const modalHeading = document.querySelector(".modal-heading");

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModalWindow();
  }
});
closeModal.addEventListener("click", closeModalWindow);
overlay.addEventListener("click", closeModalWindow);

thirdInseption.addEventListener("click", function () {
  showImage("img/modal/third-party-inseption.jpg", "Third Party Inseption");
});

thirdContentment.addEventListener("click", function () {
  showImage(
    "img/modal/Third-Party-Contentment.jpeg",
    "Third Party Contentment"
  );
});

thirdSorting.addEventListener("click", function () {
  showImage("img/modal/third-party-sorting.jpg", "Third Party Sorting");
});

thirdQuality.addEventListener("click", function () {
  showImage(
    "img/modal/Third-Party-Quality-Control.jpg",
    "Third Party Quality Control"
  );
});

thirdCS1.addEventListener("click", function () {
  showImage("img/modal/CS1-&-CS2-Inspection.jpg", "CS1 & CS2 Inspection");
});

qualityInseption.addEventListener("click", function () {
  showImage("img/modal/Quality-Inspection.jpeg", "Quality Inspection");
});

thirdRework.addEventListener("click", function () {
  showImage("img/modal/Rework.jpg", "Rework");
});

thirdGP12.addEventListener("click", function () {
  showImage("img/modal/GP-12.jpg", "GP-12");
});

thirdSafeLunch.addEventListener("click", function () {
  showImage("img/modal/Safe-Lunch.jpeg", "Safe Lunch");
});

thirdInfrared.addEventListener("click", function () {
  showImage("img/modal/Infrared-Inseption.png", "Infrared Inseption");
});

function showImage(imgPath, heading) {
  modalImg.src = imgPath;
  modalImg.alt = heading;
  modalHeading.textContent = heading;
  modalWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModalWindow() {
  modalWindow.classList.add("hidden");
  overlay.classList.add("hidden");
}
