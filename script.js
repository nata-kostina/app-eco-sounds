const state = { id: 0, isPlaying: false };

const music = [
    { id: 0, src: "./assets/audio/forest.mp3" },
    { id: 1, src: "./assets/audio/solovey.mp3" },
    { id: 2, src: "./assets/audio/drozd.mp3" },
    { id: 3, src: "./assets/audio/zarynka.mp3" },
    { id: 4, src: "./assets/audio/javoronok.mp3" },
    { id: 5, src: "./assets/audio/slavka.mp3" }
];

const pictures = [
    { id: 0, src: "./assets/img/forest.jpg" },
    { id: 1, src: "./assets/img/solovey.jpg" },
    { id: 2, src: "./assets/img/drozd.jpg" },
    { id: 3, src: "./assets/img/zarynka.jpg" },
    { id: 4, src: "./assets/img/javoronok.jpg" },
    { id: 5, src: "./assets/img/slavka.jpg" }
];

const audio = new Audio();

const playAudio = () => {
    state.isPlaying = true;
    audio.src = music.find(el => el.id === Number.parseInt(state.id)).src;
    audio.currentTime = 0;
    audio.loop = true;
    audio.play();
}

const stopAudio = () => {
    state.isPlaying = false;
    audio.pause();
}

const button = document.querySelector(".button-play");

const toggleBtn = () => {
    button.classList.toggle('pause');
}

const handleBtnClick = () => {
    toggleBtn();
    if (button.classList.contains("pause")) {
        playAudio();
    } else
        stopAudio();
}

button.addEventListener("click", handleBtnClick);
const menu = document.querySelector(".menu");

const changeBackground = () => {
    const main = document.querySelector(".main");
    let url = pictures.find(item => item.id === Number.parseInt(state.id)).src;
    main.style.backgroundImage = `url(${url})`;
}

const handleMenuClick = (event) => {
    if (state.isPlaying) {
        stopAudio();
        toggleBtn();
    }
    let link = event.target.closest('a');
    state.id = link.getAttribute('data-id');
    for (const item of menu.children) {
        item.classList.remove('menu__link_active');
    }
    link.classList.add('menu__link_active');
    changeBackground();
}

menu.addEventListener("click", handleMenuClick);

const logo = document.querySelector(".logo");

const handleLogoClick = (event) => {
    state.id = event.target.closest('a').getAttribute('data-id');
    for (const item of menu.children) {
        item.classList.remove('menu__link_active');
    }
    changeBackground();
}

logo.addEventListener("click", handleLogoClick);