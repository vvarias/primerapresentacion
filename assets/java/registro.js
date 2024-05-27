let attempts = 0;
        const maxAttempts = 3;

        function login() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const errorMessage = document.getElementById('error-message');

            if (email === "ariasvaleria@gmail.com" && password === "12345") {
                window.location.href = "index.html";
            } else {
                attempts++;
                if (attempts >= maxAttempts) {
                    document.getElementById('login-btn').disabled = true;
                    errorMessage.textContent = "Demasiados intentos fallidos. Inténtelo más tarde.";
                } else {
                    errorMessage.textContent = "Correo electrónico o contraseña incorrectos.";
                }
            }
        }
        function toggleMenu() {
            const navMenu = document.getElementById('nav-menu');
            navMenu.classList.toggle('show');
        }