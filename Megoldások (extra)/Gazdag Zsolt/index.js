function kinagyit(kuldo){
   
    document.getElementById("kep").setAttribute("src", "images//"+ kuldo.value+".jpg");
    document.getElementById("kep").setAttribute("height", 600);
    document.getElementById("kep").setAttribute("width", 600);
}

function valtozas(){
    document.getElementById("kep").setAttribute("height", document.getElementById("magassag").value);
    document.getElementById("kep").setAttribute("width", document.getElementById("szelesseg").value);
}

function effekMetodus(){
    var effektek = "";
    if (document.getElementById("blur").checked) {
        effektek += "filter:blur(8px);";
    }
    if (document.getElementById("atlatszo").checked) {
        effektek += "filter:opacity(30%);";
    }
    if (effektek.length > 0) {
        document.getElementById("kep").style=effektek;
    } else{
        document.getElementById("kep").style="none";
    }
}

function effektKatt(gyerek){
    var effektek = "";
    if (document.getElementById("eredetiLista").contains(gyerek)) {
        document.getElementById("koviLista").appendChild(gyerek);
        effektek += gyerek.value;
        document.getElementById("kep").style.filter = effektek;
    }else{
        document.getElementById("eredetiLista").appendChild(gyerek);
        effektek = effektek.replace(effektek.indexOf(gyerek.value)[0], effektek.indexOf(gyerek.value)[1], "");
        document.getElementById("kep").style.filter = effektek;
    }
}