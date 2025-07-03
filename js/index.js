const redColor = "rgb(255, 102, 102)";
const greenColor = "rgb(144, 238, 144)";

function stylizeCaseValidField(resultDiv, message) {
    resultDiv.textContent = message;
    resultDiv.style.display = "block";
    resultDiv.style.color = "rgb(144, 238, 144)";
}

function stylizeCaseInvalidField(resultDiv, message) {
    resultDiv.textContent = message;
    resultDiv.style.display = "block";
    resultDiv.style.color = "rgb(255, 102, 102)";
}

function validarNome() {
    const nome = document.getElementById("nome").value;
    const resultado = document.getElementById("validationNome");

    // Expressão regular simples para validar e-mail
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (nome.length >= 5 && nome.length <= 50) {
        stylizeCaseValidField(resultado, "Nome válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Nome inválido ✅");
        return false;
    }
}

function validarTelefone() {
    const telefone = document.getElementById("telefone").value;
    const resultado = document.getElementById("validationTelefone");

    // Expressão regular simples para validar e-mail
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (regex.test(telefone)) {
        stylizeCaseValidField(resultado, "Telefone válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Telefone inválido ✅");
        return false;
    }
}

function validarEmail() {
    const email = document.getElementById("email").value;
    const resultado = document.getElementById("validationEmail");

    // Expressão regular simples para validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        stylizeCaseValidField(resultado, "Email válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Email inválido ✅");
        return false;
    }
}

function validarMotivo() {
    const motivo = document.getElementById("motivo").value;
    const resultado = document.getElementById("validationContato");

    if (motivo.length >= 5 && motivo.length <= 50) {
        stylizeCaseValidField(resultado, "Motivo válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Motivo inválido ✅");
        return false;
    }
}

function sendRequest() {
    const form = document.getElementById("form");
    const button = document.getElementById("submit");
    const validator = document.getElementById("validator");
    const returnHomeBtn = document.getElementById("returnHome");

    if (validarNome() == false || validarTelefone() == false || validarEmail() == false || validarMotivo() == false) {
        button.disabled = false;
        button.style.backgroundColor = "rgb(255, 102, 102)";
        validator.style.display = "block";
        validator.style.color = "rgb(255, 102, 102)";
        validator.textContent = "Por favor, valide os campos, pois nem todos estão corretamente preenchidos!";
    } else {
        console.log("pode seguir");
        button.disabled = true;
        button.style.backgroundColor = "rgb(255, 102, 102)";
        form.style.display = "none";
        afterSubmit.style.display = "block";
        afterSubmit.textContent = "Obrigado por testar minha aplicação. Sua finalidade era para a execução de um trabalho da faculdade";
        afterSubmit.style.color = "white";

        returnHomeBtn.style.display = "block";
        returnHomeBtn.textContent = "Go back home";
    }

}

const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu if a link is clicked (optional, but good for UX)
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Check if we are on a small screen and menu is active
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});