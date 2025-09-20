function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('warning-modal');
    var accept = document.getElementById('warning-accept');
    var hoja = document.getElementById('page-hoja');

    function showModal() {
        if (hoja) hoja.classList.add('blurred');
        modal.setAttribute('aria-hidden', 'false');
        modal.style.display = 'flex';
        if (accept) {
            accept.disabled = true;
            accept.setAttribute('aria-disabled', 'true');
        }
        startCountdown(10);
    }
    function hideModal() {
        if (hoja) hoja.classList.remove('blurred');
        modal.setAttribute('aria-hidden', 'true');
        modal.style.display = 'none';
    }

    if (!getCookie('aptshow_epilepsy_warning')) {
        showModal();
    } else {
        document.body.classList.add('unpaused');
    }

    accept.addEventListener('click', function () {
        if (accept.disabled) return;
        setCookie('aptshow_epilepsy_warning', 'dismissed', 365);
        document.body.classList.add('unpaused');
        hideModal();
    });

    function startCountdown(seconds) {
        var numEl = document.getElementById('countdown-num');
        var countdownEl = document.getElementById('warning-countdown');
        if (!numEl) return;
        var remaining = seconds;
        numEl.textContent = remaining;
        var interval = setInterval(function () {
            remaining -= 1;
            if (remaining <= 0) {
                clearInterval(interval);
                numEl.textContent = '0';
                if (accept) {
                    accept.disabled = false;
                    accept.removeAttribute('aria-disabled');
                    accept.focus();
                }
                if (countdownEl) countdownEl.textContent = 'You may now accept.';
                return;
            }
            numEl.textContent = remaining;
        }, 1500);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
            accept.click();
        }
    });
});