let elementWhereAreYou = document.getElementById("elementoOndeVoceEsta");

let father = elementWhereAreYou.parentNode;
father.style.color = "blue";

let sonsFirstSon = elementWhereAreYou.firstElementChild;
sonsFirstSon.innerText = 'sonsFirstSon';

let firstChild = father.firstElementChild;

let accessFirstChild = elementWhereAreYou.previousElementSibling;

let textElement = elementWhereAreYou.nextSibling;

let thirdChild = elementWhereAreYou.nextElementSibling;

let accesstThirdChild = father.lastElementChild.previousElementSibling;
