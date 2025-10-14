const sendSmsBtn = document.getElementById('sendSmsBtn');

sendSmsBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    const addressInput = document.getElementById('address');
    const address = addressInput ? addressInput.value.trim() : '';

    if (!name || !phone || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    const phonePattern = /^\+?\d{7,15}$/;
    if (!phonePattern.test(phone)) {
        alert('Veuillez entrer un numéro de téléphone valide.');
        return;
    }

    let smsBody = `Résumé de votre message:\nNom: ${name}\nTéléphone: ${phone}`;
    if (address) {
        smsBody += `\nAdresse postale: ${address}`;
    }
    smsBody += `\nMessage: ${message}`;

    const encodedSms = encodeURIComponent(smsBody);

    const phoneNumber = '+32494753647'; 

    const smsUrl = `sms:${phoneNumber}?body=${encodedSms}`;

    window.location.href = smsUrl;
});
