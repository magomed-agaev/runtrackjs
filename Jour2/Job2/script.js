function showhide() {
    var article = document.querySelector('article');
    if (article.style.display === 'none') {
        article.style.display = 'block'; // Afficher l'article
    } else {
        article.style.display = 'none'; // Masquer l'article
    }
}