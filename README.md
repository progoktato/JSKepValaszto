# JSKepValaszto

Feladat:
a) Egy listában elhelyezett képek küzül lehessen választani egyet, amit egy DIV-be helyezett IMG-be tölt.
b) A kép szélességét és magasságát lehessen változtatni két csúszka segítségével! (minimum érték 10, maximum érték 600)
c) A mellékelt linken elérhető effektekből válasszon ki két teszőlegeset és oldja meg, hogy egy-egy jelölőnégyzet (checkbox) segítségével lehessen alkalmazni ezeket a képre! 
Amikor mindkét effektus ki van választva, akkor mindkettő hasson a képre! Ha valamelyik kiválasztás megszűnik, akkor az szünjön meg!

https://www.w3schools.com/cssref/playdemo.php?filename=playcss_filter&preval=opacity(30%25

EXTRA feladat:
A jelölő négyzetek helyett egy lista tartalmazza a választható effekteket. A listából kiválasztott effektus (onclick) átkerül a másik -kezdetben üres- listába. Ekkor az effektus érvényesül a képen. Ha az érvényben lévő effektusok közül választunk ki egyet, akkor az visszakerül az eredeti listába és a képen kifejtett hatása megszünik.


Az alapfeladat a) részét kétféleképpen is meg lehetne oldani:
1. minden <option> - onclick eseménykezelőt kap
2. csak a <select> kap eseménykezelőt (onchange)
Az utóbbi egyszerűbb és html oldalról kevesebb munkát igényel!