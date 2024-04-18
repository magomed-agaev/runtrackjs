function jour() {
    var jour = new Date();
    var semaine = new Array(
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
    );

    for (i = 0; i < 7; i++) {
        console.log(semaine[(jour.getDay() + 1 + i) % 7]);
    }
}

day();