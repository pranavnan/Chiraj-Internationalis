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

const btnServicePatner = document.querySelector(".btn-service-patner");
const sectionServicePatner = document.querySelector(".delivered-services");

btnServicePatner.addEventListener("click", function (e) {
  e.preventDefault();
  sectionServicePatner.scrollIntoView({ behavior: "smooth" });
});
