const panels = document.querySelectorAll('.panel');
 
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.style.backgroundImage = `url("https://picsum.photos/300/600?random=${Math.random()}")`;
        panel.classList.add('active');
    });
});
 
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
        panel.style.backgroundImage = ''; // Removendo o background anterior
    });
}