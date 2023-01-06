"use strict";

const arr = [
  {
    heading: "Kitting & Packaging Services",
    img1: "img/services-img/kitting-packaging-services/1.png",
    img2: "img/services-img/kitting-packaging-services/2.png",
    img3: "img/services-img/kitting-packaging-services/3.png",
    img4: "img/services-img/kitting-packaging-services/4.png",
  },
  {
    heading: "Quality Inspection at Customer End",
    img1: "img/services-img/quality-inseption-at-customer-end/1.png",
    img2: "img/services-img/quality-inseption-at-customer-end/2.png",
    img3: "img/services-img/quality-inseption-at-customer-end/3.png",
    img4: "img/services-img/quality-inseption-at-customer-end/4.png",
  },
  {
    heading: "Visual Inspection at Warehouse",
    img1: "img/services-img/visual-inspection-at-warehouse/1.png",
    img2: "img/services-img/visual-inspection-at-warehouse/2.png",
    img3: "img/services-img/visual-inspection-at-warehouse/3.png",
    img4: "img/services-img/visual-inspection-at-warehouse/4.png",
  },
  {
    heading: "Warehousing and Distribution Facility",
    img1: "img/services-img/warehousing-distribution-facility/1.png",
    img2: "img/services-img/warehousing-distribution-facility/2.png",
    // img3: "img/services-img/warehousing-distribution-facility/3.jpg",
    // img4: "img/services-img/warehousing-distribution-facility/4.jpeg",
  },
  {
    heading: "SMD Component Tape and Reel Services",
    img1: "img/services-img/smd-component-tape-reel-services/1.png",
    img2: "img/services-img/smd-component-tape-reel-services/2.png",
    img3: "img/services-img/smd-component-tape-reel-services/3.png",
    img4: "img/services-img/smd-component-tape-reel-services/4.png",
  },
  {
    heading: "Export Packaging",
    img1: "img/services-img/export-packaging/1.png",
    img2: "img/services-img/export-packaging/2.png",
    img3: "img/services-img/export-packaging/3.png",
    img4: "img/services-img/export-packaging/4.png",
  },
  {
    heading: "Labelling on FG Products",
    img1: "img/services-img/labelling-on-fg-products/1.png",
    img2: "img/services-img/labelling-on-fg-products/2.png",
    img3: "img/services-img/labelling-on-fg-products/3.png",
    img4: "img/services-img/labelling-on-fg-products/4.png",
  },
  {
    heading: "Assembly Services",
    img1: "img/services-img/assembly-services/1.png",
    img2: "img/services-img/assembly-services/2.png",
    img3: "img/services-img/assembly-services/3.png",
    img4: "img/services-img/assembly-services/4.png",
  },
  {
    heading: "Solar and Power Installation",
    img1: "img/services-img/solar-power-installation/1.png",
    img2: "img/services-img/solar-power-installation/2.png",
    img3: "img/services-img/solar-power-installation/3.png",
    img4: "img/services-img/solar-power-installation/4.png",
  },
];

let current = 0;
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const heading = document.querySelector(".how-heading");
const img1 = document.querySelector(".img--1");
const img2 = document.querySelector(".img--2");
const img3 = document.querySelector(".img--3");
const img4 = document.querySelector(".img--4");

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (current <= 9 && current >= 0) {
    ++current;
    if (prevBtn.disabled) {
      prevBtn.disabled = false;
    }
    if (current === 8) {
      nextBtn.disabled = true;
    }
    changeContent();
  }
});

if (current === 0) {
  prevBtn.disabled = true;
}
prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (current > 0) {
    --current;
    if (nextBtn.disabled) {
      nextBtn.disabled = false;
    }
    if (current === 0) {
      prevBtn.disabled = true;
    }
    changeContent();
  }
});

function changeContent() {
  heading.textContent = arr[current].heading;
  img1.src = arr[current].img1;
  img2.src = arr[current].img2;
  img3.src = arr[current].img3;
  img4.src = arr[current].img4;
}
