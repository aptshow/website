function attemptLogin() {
    document.querySelector('.login-form').style.animation = 'spin 0.5s infinite';
    setTimeout(() => {
        document.querySelector('.login-form').style.display = 'none';
        document.querySelector('.message').style.display = 'block';
        document.querySelector('#hackerman').style.display = 'block';
        
        const audio = new Audio('wow.mp3');
        audio.play();
        const audio2 = new Audio('../music/aptheme.ogg');
        audio2.play();

        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        }, 118000);
    }, 2000);
    return false;
}
