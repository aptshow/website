window.addEventListener('scroll', () => {
    const rotation = window.scrollY / 10;
    document.body.style.transform = `rotate(${rotation}deg)`;
});