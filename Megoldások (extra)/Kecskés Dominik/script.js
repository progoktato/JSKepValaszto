function kivalaszt (kuldott) {
    document.getElementById("kep").setAttribute("src", `images\\${kuldott.value}.png`)
}

function meretvaltoztat() {
    document.getElementById("kep").setAttribute("width", document.getElementById("szelesseg").value)
    document.getElementById("kep").setAttribute("height", document.getElementById("magassag").value)
}

function valtoztatEffekt(kuldott) {
    if (kuldott.parentElement.id == "tarolt") {
        document.getElementById("kep").style.filter += `${kuldott.value} `
        document.getElementById("kivalasztott").appendChild(kuldott)
    } else if (kuldott.parentElement.id == "kivalasztott") {
        document.getElementById("kep").style.filter = document.getElementById("kep").style.filter.replace(kuldott.value, '')
        document.getElementById("tarolt").appendChild(kuldott)
        if (document.getElementById("kep").style.filter.indexOf(kuldott.value) > -1) {
            document.getElementById("kep").style.filter = ""
        }
    }
    
}