function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

// Exemple d'utilisation
const nombre1 = 7;
const nombre2 = 11;
const resultat = sommeNombresPremiers(nombre1, nombre2);

if (resultat !== false) {
    console.log(`La somme de ${nombre1} et ${nombre2} est ${resultat}.`);
} else {
    console.log("Au moins l'un des nombres n'est pas premier.");
}
