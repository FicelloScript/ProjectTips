// Pour faire fonctionner la date
function formatDate(d) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return d.toLocaleDateString('fr-FR', options);
}

document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    document.getElementById('current-date').textContent = formatDate(now);
});
//Fin - Pour faire fonctionner la date

document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('toggle-dark-mode');
    const timeOfDayElement = document.querySelector('.change'); // Assurez-vous que c'est la bonne classe pour l'élément que vous voulez changer

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            // Vérifiez si le mode nuit est activé et changez le texte en conséquence
            if (document.body.classList.contains('dark-mode')) {
                timeOfDayElement.textContent = 'Soir';
            } else {
                timeOfDayElement.textContent = 'Midi';
            }
        });
    }
});
