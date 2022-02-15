const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role= document.querySelector('.role');

const testimonials = [
    {
        name: 'Honore de Balzac',
        type: 'Romance',
        photo:
            'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        text:
            'True love is eternal, infinite, and always like itself. It is equal and pure, without violent demonstrations: it is seen with white hairs and is always young in the heart.',
    },
    {
        name: 'Ana Landers',
        type: 'Romance',
        photo:
            'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG92ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            'Love is friendship that has caught fire. It is quiet understanding, mutual confidence, sharing and forgiving. It is loyalty through good and bad times. It settles for less than perfection and makes allowances for human weaknesses.',
    },
    {
        name: 'Marcel Proust',
        type: 'Romance',
        photo: 
            'https://images.unsplash.com/photo-1516967124798-10656f7dca28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            'Let us be grateful to people who make us happy, they are the charming gardeners who make our souls blossom.',
    },
    {
        name: 'Ulysses S. Grant',
        type: 'Friendship',
        photo:
            'https://images.unsplash.com/photo-1527628173875-3c7bfd28ad78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG92ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            'The friend in my adversity I shall always cherish most. I can better trust those who helped to relieve the gloom of my dark hours than those who are so ready to enjoy with me the sunshine of my prosperity.',
    },
    {
        name: 'Orson Welles',
        type: 'Love',
        photo:
            'https://images.unsplash.com/photo-1504122398460-c635d6377010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        text:
            "We're born alone, we live alone, we die alone. Only through our love and friendship can we create the illusion for the moment that we're not alone.",
    },
    {
        name: 'Loretta Young',
        type: 'Prayer',
        photo:
            'https://images.unsplash.com/photo-1606443410339-4046fad7a16a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cHJheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text:
            'I believe that prayer is our powerful contact with the greatest force in the universe.',
    },
    {
        name: 'Steve Jobs',
        type: 'Believe',
        photo:
            'https://images.unsplash.com/photo-1574953056887-b1970bdd4506?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVsaWV2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
        text:
            "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
    },
    {
        name: 'Bear Bryant',
        type: 'Belive In Yourself',
        photo:
            'https://media.istockphoto.com/photos/girls-hand-with-believe-in-your-dreams-written-on-it-picture-id486891526?b=1&k=20&m=486891526&s=170667a&w=0&h=avXIDtBiQ6q7u1AtGGVBlia1Rq0CPQRDmQbXBG37zUY=',
        text:
            "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.",
    },
    {
        name: 'Swami Vivekananda',
        type: 'Success',
        photo:
            'https://media.istockphoto.com/photos/success-in-the-asphalt-road-picture-id1299174533?b=1&k=20&m=1299174533&s=170667a&w=0&h=EBiOkMLGkzvd8SpLLBdl_C8fnGLoDT51TOAtTJagqtA=',
        text:
            "Take up one idea. Make that one idea your life - think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    },
]  

let idx = 1;
function updateTestimonial() {
    const { name, type, photo, text } = testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = type;
    idx++; 
    if (idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);