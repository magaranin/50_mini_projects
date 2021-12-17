window.addEventListener('keydown', (event) => {
    const insert = document.getElementById('insert');
    const eventKey = document.getElementById('eventKey');
    const keyCode = document.getElementById('keyCode');
    const code = document.getElementById('code');

    eventKey.innerHTML = event.key === ' ' ? 'Space' : event.key;
    keyCode.innerHTML = event.keyCode;
    code.innerHTML = event.code;
    document.querySelectorAll(".key").forEach((element) => {
        element.style.display = 'inline-flex';
    });
});