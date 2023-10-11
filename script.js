const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if (currentSlide === slider.length - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if (currentSlide === 0) {
        currentSlide = slider.length - 1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)



function calcularIMC() {
    var peso = document.getElementById("peso").value;
    var altura = document.getElementById("altura").value;
    if (peso == "" || altura == "") {
        alert("Preencha todos os campos!");
        return;
    }
    var imc = peso / (altura * altura);
    document.getElementById("imc").innerHTML = "Seu IMC é " + imc.toFixed(2);
    if (imc < 18.5) {
        document.getElementById("comentario").innerHTML = "Você está abaixo do peso!";
    } else if (imc >= 18.5 && imc < 25) {
        document.getElementById("comentario").innerHTML = "Você está com peso normal!";
    } else if (imc >= 25 && imc < 30) {
        document.getElementById("comentario").innerHTML = "Você está com sobrepeso!";
    } else if (imc >= 30 && imc < 35) {
        document.getElementById("comentario").innerHTML = "Você está com obesidade grau I!";
    } else if (imc >= 35 && imc < 40) {
        document.getElementById("comentario").innerHTML = "Você está com obesidade grau II!";
    } else {
        document.getElementById("comentario").innerHTML = "Você está com obesidade grau III!";
    }
}
function limparFormulario() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("imc").innerHTML = "";
    document.getElementById("comentario").innerHTML = "";
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}