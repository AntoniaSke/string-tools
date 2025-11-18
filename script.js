// UPPERCASE
document.getElementById('uppercase-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputEl = document.getElementById('uppercase-input'); 
    const input = inputEl.value; // εδώ παίρνεις το string

    const resultBox = document.getElementById('uppercase-output-box');
    const result = document.getElementById('uppercase-result');

    result.textContent = input.toUpperCase();

    resultBox.style.display = 'block';
    resultBox.style.opacity = '1';

    inputEl.value = '';   
    inputEl.focus();      
});


// LOWERCASE
document.getElementById('lowercase-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const inputEl = document.getElementById('lowercase-input');
    const input = inputEl.value;

    const resultBox = document.getElementById('lowercase-output-box');
    const result = document.getElementById('lowercase-result');

    result.textContent = input.toLowerCase();

    resultBox.style.display = 'block';
    resultBox.style.opacity = '1';

    inputEl.value = '';  
    inputEl.focus();     
});


const sections = document.querySelectorAll('.tool-section');
const menuLinks = document.querySelectorAll('.sidebar a');

function showSection(id) {
    sections.forEach(section => {
        if (section.id === id) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').slice(1); 
        showSection(targetId);
    });
});

showSection('convert-to-uppercase');
