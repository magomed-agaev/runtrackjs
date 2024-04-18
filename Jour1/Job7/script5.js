function jourTravaille(date) {
    // Récupération du jour de la semaine (0 = dimanche, 1 = lundi, ..., 6 = samedi)
    const jourSemaine = date.getDay();

    // Récupération du mois (0 = janvier, 1 = février, ..., 11 = décembre)
    const mois = date.getMonth();

    // Récupération de l'année
    const annee = date.getFullYear();

    // Tableau des jours fériés en 2024 (à titre d'exemple)
    const joursFeries = [
        new Date(annee, 0, 1), // Jour de l'an
        new Date(annee, 4, 1), // Fête du Travail
        new Date(annee, 6, 14), // Fête Nationale
        new Date(annee, 10, 11), // Armistice
        // Ajoutez d'autres jours fériés ici...
    ];

    // Vérification si la date est un jour férié
    for (const jourFerie of joursFeries) {
        if (date.getTime() === jourFerie.getTime()) {
            console.log(`Le ${jourFerie.getDate()} ${mois + 1} ${annee} est un jour férié.`);
            return;
        }
    }

    // Vérification si la date est un samedi ou un dimanche
    if (jourSemaine === 0 || jourSemaine === 6) {
        console.log(`Non, le ${date.getDate()} ${mois + 1} ${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${date.getDate()} ${mois + 1} ${annee} est un jour travaillé.`);
    }
}

// Exemple d'utilisation
const maDate = new Date(2024, 3, 16); // 16 avril 2024
jourTravaille(maDate);
