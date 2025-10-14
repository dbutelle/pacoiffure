const sendSmsBtn = document.getElementById('sendSmsBtn');

sendSmsBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !phone || !message) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Validation simple numéro de téléphone (7 à 15 chiffres, optionnel +)
    const phonePattern = /^\+?\d{7,15}$/;
    if (!phonePattern.test(phone)) {
        alert('Veuillez entrer un numéro de téléphone valide (7 à 15 chiffres, peut commencer par +).');
        return;
    }

    const smsBody =
        `Résumé de votre message:\n` +
        `Nom: ${name}\n` +
        `Téléphone: ${phone}\n` +
        `Message: ${message}`;

    const encodedSms = encodeURIComponent(smsBody);

    const phoneNumber = '0032494753647'; // Remplace ce numéro par le tien

    const smsUrl = `sms:${phoneNumber}?body=${encodedSms}`;

    window.location.href = smsUrl;
});
