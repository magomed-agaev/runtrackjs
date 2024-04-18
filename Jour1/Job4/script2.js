function estBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
const anneeAVerifier = 2024;
if (estBissextile(anneeAVerifier)) {
    console.log("L'année est bissextile !");
} else {
    console.log("L'année n'est pas bissextile !");
}
