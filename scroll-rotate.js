window.addEventListener('scroll', () => {
    const rotation = window.scrollY / 10;
    document.body.style.transform = `rotate(${rotation}deg)`;
});

const audio = new Audio('music/aptheme.ogg');
audio.play();