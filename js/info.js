let infoTartaruga = document.getElementById('info_tartaruga');
let infoPeixe = document.getElementById('info_peixe');
let infoCoraisEAlgas = document.getElementById('info_corais_e_algas');
let infoBaleia = document.getElementById('info_baleia');
let infoAguaViva = document.getElementById('info_agua_viva');
let infoCardume = document.getElementById('info_cardume');
let infoGolfinho = document.getElementById('info_golfinho');
let infoCavaloMarinho = document.getElementById('info_cavalo_marinho');
let contactForm = document.getElementById('contact_form');

function bubblePop() {
    let audio = new Audio('/assets/bubble-sound-43207.mp3');
    audio.play();
  }


document.querySelectorAll('img[alt="tartaruga"]').forEach(img => {
    img.addEventListener('click', function() {
        infoTartaruga.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="peixe"]').forEach(img => {
    img.addEventListener('click', function() {
        infoPeixe.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="coral"]').forEach(img => {
    img.addEventListener('click', function() {
        infoCoraisEAlgas.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="alga"]').forEach(img => {
    img.addEventListener('click', function() {
        infoCoraisEAlgas.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="baleia"]').forEach(img => {
    img.addEventListener('click', function() {
        infoBaleia.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="agua viva"]').forEach(img => {
    img.addEventListener('click', function() {
        infoAguaViva.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="cardume"]').forEach(img => {
    img.addEventListener('click', function() {
        infoCardume.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="golfinho"]').forEach(img => {
    img.addEventListener('click', function() {
        infoGolfinho.style.display= 'flex';
    });
});

document.querySelectorAll('img[alt="cavalo marinho"]').forEach(img => {
    img.addEventListener('click', function() {
        infoCavaloMarinho.style.display= 'flex';
    });
});


function openForm() {
    contactForm.style.display = 'flex';
}

function closeForm(){

    contactForm.style.display = 'none';
}

function closeInfo() {
    let infoDivs = [
        infoTartaruga, 
        infoPeixe, 
        infoCoraisEAlgas, 
        infoBaleia, 
        infoAguaViva, 
        infoCardume, 
        infoGolfinho,
        infoCavaloMarinho
    ];
    
    infoDivs.forEach(div => {
        if (div) {
            div.style.display = 'none';
        }
    });
}

document.querySelectorAll('img[alt="bolha"]').forEach(img => {
    img.addEventListener('click', function() {        
        bubblePop()
        img.style.display= 'none';
    });
});

