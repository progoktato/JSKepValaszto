function kepValaszt() {
    select = document.getElementById("kepek");
    kep = document.getElementById("kep");
    kep.src = select.value;
    meretInput();
}

function meretInput() {
    szelesseg = document.getElementById("szelesseg").value;
    magassag = document.getElementById("magassag").value;
    kep = document.getElementById("kep");
    kep.width = szelesseg;
    kep.height = magassag;
}

function filterKivalaszt() {
    filterek = document.getElementById("filterek")
    kivalasztott = document.getElementById("kivalasztott")

    kivalasztottOption = filterek.querySelectorAll("option")[filterek.selectedIndex]

    ujElem = document.createElement("option")
    ujElem.value = filterek.value
    ujElem.innerText = kivalasztottOption.innerText
    kivalasztott.appendChild(ujElem)

    filterek.removeChild(kivalasztottOption)
    filterFrissit()
}

function filterTorol() {
    filterek = document.getElementById("filterek")
    kivalasztott = document.getElementById("kivalasztott")

    kivalasztottOption = kivalasztott.querySelectorAll("option")[kivalasztott.selectedIndex]

    ujElem = document.createElement("option")
    ujElem.value = kivalasztott.value
    ujElem.innerText = kivalasztottOption.innerText
    filterek.appendChild(ujElem)

    kivalasztott.removeChild(kivalasztottOption)
    filterFrissit()
}

function filterFrissit() {
    kivalasztott = document.getElementById("kivalasztott")
    optionok = kivalasztott.querySelectorAll("option")
    kep = document.getElementById("kep")

    filterString = "";

    optionok.forEach(option => {
        console.log(option.value)
        filterString += option.value
    });
    kep.style.filter = filterString;
}