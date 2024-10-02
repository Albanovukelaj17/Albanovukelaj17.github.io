const strings = [
    "I'm Vukelaj Albano.",
    "I am Albanian, born and raised in Italy.",
       " I moved to Germany, where I study Applied Informatics at Wiesbaden University (HSRM).",
       " I am currently in my fifth semester.",
       " I only began in the last few months to give Informatics a fair chance and have been working a lot in my free time.",
       " I am very enthusiastic about the future and curious about how many projects I can create.",
       " This is a phase of learning, which is why the projects are not very advanced.",
       " In the near future, I will possibly be working on larger and more complex projects.",
       " Currently spoken languages: Italian, German, English, Spanish, Albanian.",
    "Currently using programming languages in Informatics: Python, Java, JavaScript, C, C#, Ruby, Rust, Swift."
];

let counter = 0;
let index = 0;
let textElement = document.getElementById("text-resolver");

function typeText(text, speed, callback) {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeText(text, speed, callback), speed);
    } else {
        callback();
    }
}

function deleteText(speed, callback) {
    if (index > 0) {
        textElement.innerHTML = textElement.innerHTML.substring(0, index - 1);
        index--;
        setTimeout(() => deleteText(speed, callback), speed);
    } else {
        callback();
    }
}

function animateText() {
    const currentString = strings[counter];
    typeText(currentString, 20, () => {
        setTimeout(() => {
            deleteText(20, () => {
                counter = (counter + 1) % strings.length;
                animateText();
            });
        }, 2000); // Delay before deleting
    });
}

animateText();

function createParticles() {
    const particleBackground = document.getElementById('particle-background');

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.animationDuration = `${Math.random() * 3 + 3}s`;
        particleBackground.appendChild(particle);
    }
}

createParticles();
