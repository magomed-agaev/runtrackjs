function tri(numbers, order) {
    if (!Array.isArray(numbers)) {
        console.error("Le paramètre 'numbers' doit être un tableau.");
        return;
    }

    if (order !== "asc" && order !== "desc") {
        console.error("Le paramètre 'order' doit être 'asc' (ascendant) ou 'desc' (décroissant).");
        return;
    }

    // Utilisation de la méthode sort() pour trier le tableau
    numbers.sort((a, b) => {
        if (order === "asc") {
            return a - b; // Tri ascendant
        } else {
            return b - a; // Tri décroissant
        }
    });

    return numbers;
}

// Exemple d'utilisation
const monTableau = [5, 2, 8, 1, 10];
const ordreTri = "asc"; // ou "desc"
const tableauTrie = tri(monTableau, ordreTri);

if (tableauTrie) {
    console.log(`Tableau trié (${ordreTri}endant) :`, tableauTrie);
} else {
    console.log("Erreur lors du tri du tableau.");
}
