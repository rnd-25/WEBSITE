

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Animasi Menulis

const texts = [
    "INNOVATIVE SOLUTIONS",
    "CREATIVE DESIGN",
    "ADVANCED TECHNOLOGY"
];

let speed = 120; // Kecepatan mengetik
let eraseSpeed = 80; // Kecepatan menghapus
let pauseAfterTyping = 1500; // Jeda setelah mengetik
let pauseAfterErasing = 500; // Jeda setelah menghapus

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, pauseAfterTyping);
    }
}

function eraseText() {
    if (charcterIndex > 0) {
        textElements.innerHTML = texts[textIndex].slice(0, --charcterIndex);
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Berpindah ke teks berikutnya
        setTimeout(typeWriter, pauseAfterErasing);
    }
}

window.onload = typeWriter;



