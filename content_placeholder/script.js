const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 1500)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1645670533175-d7a1c1df849e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1106&q=80" alt=""/>';
    title.innerHtml = "Once you're grown up you can't come back.";
    excerpt.innerHTML = "Be the reason someone smiles. Be the reason someone feels loved and believes in the goodness in people.";
    profile_img.innerHtml = '<img src="https://images.unsplash.com/photo-1645389770504-d3ad0838cce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" alt=""/>';
    name.innerHTML = 'John Doe';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'));
}