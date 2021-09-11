let father = document.getElementById("pai");
let brotherElementWhereAreYou = document.createElement("section");
brotherElementWhereAreYou.id = "irmaoElementoOndeVoceEsta";
father.appendChild(brotherElementWhereAreYou);

let elementWhereAreYou = document.getElementById("elementoOndeVoceEsta");
let sonElementWhereAreYou = document.createElement("section");
sonElementWhereAreYou.id = "filhoElementoOndeVoceEsta";
elementWhereAreYou.appendChild(sonElementWhereAreYou);

let sonsFirstSon = document.getElementById("primeiroFilhoDoFilho");
let sonOfTheFirstSonOfTheSon = document.createElement("section");
sonOfTheFirstSonOfTheSon.id = "filhoDoPrimeiroFilhoDoFilho";
sonsFirstSon.appendChild(sonOfTheFirstSonOfTheSon);

let thirdChild = sonOfTheFirstSonOfTheSon.parentElement.parentElement.nextElementSibling;
