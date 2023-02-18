//a) feladat - onclick hivja. Nem szerencses, mivel csak kattintásra lesz jó és a billenytűvel történő választásra nem reagál
function kepetValaszt(kuldo) {

    document.getElementById("kep").src = "images//" + kuldo.value;
}


//a) feladat - onchange / Ez az igazán jó megoldás, ráadásul HTML oldalon is könnnyebb dolgunk van.
function valaszt(kuldo) {

    //A két megoldás egyenértékű!
    document.getElementById("kep").src = "images//" + kuldo.value;

    /*  
    document.getElementById("kep").setAttribute("src", "images//" + kuldo.value;
    */
}


//b) feladat
function meretez() {
    document.getElementById("kep").setAttribute("height", document.getElementById("kep_magassag").value);
    document.getElementById("kep").setAttribute("width", document.getElementById("kep_szelesseg").value);
}

//c) feladat
//A megoldás előnye, hogy akárhány checkbox-ra működik!
function effekt_Beallitas(kuldo) {
    var elvalasztas = "";
    //Ha már van vmilyen effekt bekapcsolva
    if (document.getElementById("kep").style.filter != "")
        elvalasztas = " "; //fontos, hogy a következő el legyen tőle választva!

    //A kiválasztott effektust be kell tenni a felsorolásba
    if (kuldo.checked) {
        //a kuldo name attribútuma fogja hozni az effektust
        ujFilter = document.getElementById("kep").style.filter + elvalasztas + kuldo.name; 
    }
    //A kiválasztásból visszavett effektust ki kell törölni a felsorolásból, utána pedig eltüntejük a felesleges szóközt is ha van benne
    else {
        ujFilter=document.getElementById("kep").style.filter.replace(kuldo.name, "").replace(" ","");
    }

    document.getElementById("kep").style.filter = ujFilter;
}