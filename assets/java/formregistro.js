function generarCorreo() {
    const firstName = document.getElementById('firstName').value.trim().toLowerCase();
    let secondName = document.getElementById('secondName').value.trim().toLowerCase();
    const firstLastName = document.getElementById('firstLastName').value.trim().toLowerCase();
    const secondLastName = document.getElementById('secondLastName').value.trim().toLowerCase();
    const birthDate = document.getElementById('birthDate').value;

    if (!firstName || !firstLastName || !secondLastName || !birthDate) {
        document.getElementById('result').innerText = 'Por favor, complete todos los campos.';
        return;
    }

    if (!secondName) {
        secondName = firstName;
    }

    const birthYear = birthDate.slice(2, 4);
    const birthMonth = birthDate.slice(5, 7);
    const birthDay = birthDate.slice(8, 10);
    const email = `${firstName.charAt(0)}${secondName.charAt(0)}${firstLastName}${secondLastName.charAt(0)}${birthYear}${birthMonth}${birthDay}@gmail.com`;

    document.getElementById('result').innerText = `Tu correo es: ${email}`;
}