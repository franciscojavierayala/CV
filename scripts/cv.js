document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggle-curriculum');
    var curriculum = document.getElementById('curriculum');

    toggleButton.addEventListener('click', function() {
        if (curriculum.style.display === 'none') {
            curriculum.style.display = 'block';
            this.textContent = 'Ocultar currículum';
        } else {
            curriculum.style.display = 'none';
            this.textContent = 'Ver currículum';
        }
    });
});

