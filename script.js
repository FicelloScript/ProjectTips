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
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
        });
    }
});