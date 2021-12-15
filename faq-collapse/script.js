const buttons = document.querySelectorAll('.faq');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.classList.contains('active')) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    })
})

