let addHeader = document.getElementById("header-container");
addHeader.style.background = "rgb(0, 176, 105)";

let addSection = document.getElementsByClassName("emergency-tasks")[0];
addSection.style.background = "rgb(255, 159, 132)";


let addSection2 = document.getElementsByClassName("no-emergency-tasks")[0];
addSection2.style.background = "rgb(249, 219, 94)";

function addSectionChildOne() {
  let addSectionChild = document.querySelectorAll(".emergency-tasks h3");
  for (let idx in addSectionChild) {
    addSectionChild[idx].style.background = "rgb(165, 0, 243)";
  };
};
addSectionChildOne();

function addSectionChildTwo() {
  let addSectionChildren = document.querySelectorAll(".no-emergency-tasks h3");
  for (let idx in addSectionChildren) {
    addSectionChildren[idx].style.background = "rgb(35, 37, 37)";
  };
};
addSectionChildTwo();

let addFooter = document.getElementById("footer-container");
addFooter.style.background = "rgb(0, 53, 51)";
