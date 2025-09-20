window.addEventListener('scroll', () => {
    try {
        if (!document.body || !document.body.classList.contains('unpaused')) return;
        const rotation = window.scrollY / 10;
        document.body.style.transform = `rotate(${rotation}deg)`;
    } catch (e) {
        // do nothing
    }
});
