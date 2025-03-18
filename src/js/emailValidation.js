export function validateEmail() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');

    if (!form || !emailInput) {
        console.error('Email field or form not found!');
        return;
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            alert('Grazie per aver visitato il nostro sito!'); 
            form.submit();
        } else if (!emailRegex.test(email)) {
            alert('Inserisci un indirizzo email valido se desideri ricevere promozioni.');
        } else {
            alert('Grazie per esserti iscritto! Riceverai le nostre promozioni via email.');
            form.submit();
        }
    });
}