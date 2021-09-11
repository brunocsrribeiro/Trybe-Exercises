let removeElement = document.querySelector("#pai");

    for (let idx = pai.childNodes.length -1; idx >= 0; idx -= 1) {
      let currentChildren = pai.childNodes[idx];
      if (currentChildren.id !== "elementoOndeVoceEsta") {
        currentChildren.remove()
      }
    }

    let fathersSecondAndLastSon = document.querySelector("#segundoEUltimoFilhoDoFilho");
    fathersSecondAndLastSon.remove();
    