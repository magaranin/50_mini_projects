const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes); //when it happeneds -> function checkBoxes

checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4; // our trigger point

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top; // returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}