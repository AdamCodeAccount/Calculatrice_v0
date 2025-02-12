
function ajouterValeur(valeur){
    let ecran = document.getElementById("screen");

    if (ecran.value === "0") {
        ecran.value = valeur;

    }else {
        ecran.value += valeur
    }

}

function effacerEcran(){
    document.getElementById("screen").value = "0";
}

function calculer() {
    let ecran = document.getElementById("screen");
    try {
        let resultat = Function('"use strict"; return (' + ecran.value + ')')();
        ecran.value = resultat;

    }  catch (e) {
        ecran.value = "Erreur";
    }
}

function negatif(){
    let ecran = document.getElementById("screen");
    if (ecran.value !== "0") {
        ecran.value = ecran.value.startwith("-") ? ecran.valuesubstring(1) : "-" + ecran.value;
    }
}


function main(){
    ajouterValeur()
    effacerEcran()
    calculer()
    negatif()
}