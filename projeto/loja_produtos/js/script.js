const cards = document.querySelectorAll(".card");
const btnRedefinir = document.getElementById('btnRedefinir');

cards.forEach(car => {
    car.addEventListener("click", () => {
        car.classList.toggle("selecionado");
    });
});

cards.forEach(car => {
    btnRedefinir.addEventListener("click", () => {
        car.classList.remove("selecionado");
    });
});