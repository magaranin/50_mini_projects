const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target  = +counter.getAttribute('data-target');
        const starter = +counter.innerText;
        const increment = target / 400;

        if (starter < target) {
            counter.innerText = `${Math.ceil(starter + increment)}`;
            setTimeout(updateCounter, 1);
        } 
        else {
            counter.innerText = target;
        }
    }
    updateCounter()
})