const buttons = document.querySelectorAll('.faq');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })
})

