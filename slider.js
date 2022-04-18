const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionUiltimo = sliderSection [sliderSection.length -1];

const btnIzquierda = document.querySelector("#btn-izquierda");
const btnDerecha = document.querySelector("#btn-derecha");

slider.insertAdjacentElement('afterbegin', sliderSectionUiltimo);

function Siguiente(){
    let sliderSectionPrimero = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionPrimero)
        slider.style.marginLeft = "-100%";
    },500);
}
function Atras(){
    let sliderSection = document.querySelectorAll(".slider-section");
    let sliderSectionUiltimo = sliderSection [sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionUiltimo);
        slider.style.marginLeft = "-100%";
    }, 500);
}



btnDerecha.addEventListener('click', function(){
    Siguiente();
});
btnIzquierda.addEventListener('click', function(){
    Atras();
});