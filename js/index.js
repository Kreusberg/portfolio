// Define as cores para feedback de validação.
const redColor = "rgb(255, 102, 102)";
const greenColor = "rgb(144, 238, 144)";

/**
 * Estiliza um campo de resultado para indicar que é válido.
 * @param {HTMLElement} resultDiv - O elemento div a exibir a mensagem de validação caso preenchido corretamente.
 * @param {string} message - A mensagem a ser exibida.
 */
function stylizeCaseValidField(resultDiv, message) {
    resultDiv.textContent = message;
    resultDiv.style.display = "block";
    resultDiv.style.color = greenColor;
}

/**
 * Estiliza um campo de resultado para indicar que é inválido.
 * @param {HTMLElement} resultDiv - O elemento div a exibir a mensagem de validação caso preenchido incorretamente.
 * @param {string} message - A mensagem a ser exibida.
 */
function stylizeCaseInvalidField(resultDiv, message) {
    resultDiv.textContent = message;
    resultDiv.style.display = "block";
    resultDiv.style.color = redColor;
}

/**
 * Valida o campo do nome.
 * @returns {boolean} - Retorna verdadeiro se o nome for válido, caso contrário, retorna falso.
 */
function validarNome() {
    // Obtém o valor do campo de nome e o elemento de resultado da validação.
    const nome = document.getElementById("nome").value;
    const resultado = document.getElementById("validationNome");

    // Verifica se o comprimento do nome está entre 5 e 50 caracteres.
    if (nome.length >= 5 && nome.length <= 50) {
        stylizeCaseValidField(resultado, "Nome válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Nome inválido ✅");
        return false;
    }
}

/**
 * Valida o campo do telefone.
 * @returns {boolean} - Retorna verdadeiro se o telefone for válido, caso contrário, retorna falso.
 */
function validarTelefone() {
    // Obtém o valor do campo de telefone e o elemento de resultado da validação.
    const telefone = document.getElementById("telefone").value;
    const resultado = document.getElementById("validationTelefone");

    // Expressão regular para validar o formato do telefone.
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    // Testa o valor do telefone em relação à expressão regular.
    if (regex.test(telefone)) {
        stylizeCaseValidField(resultado, "Telefone válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Telefone inválido ✅");
        return false;
    }
}

/**
 * Valida o campo de e-mail.
 * @returns {boolean} - Retorna verdadeiro se o e-mail for válido, caso contrário, retorna falso.
 */
function validarEmail() {
    // Obtém o valor do campo de e-mail e o elemento de resultado da validação.
    const email = document.getElementById("email").value;
    const resultado = document.getElementById("validationEmail");

    // Expressão regular para validar o formato do e-mail.
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Testa o valor do e-mail em relação à expressão regular.
    if (regex.test(email)) {
        stylizeCaseValidField(resultado, "Email válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Email inválido ✅");
        return false;
    }
}

/**
 * Valida o campo do motivo.
 * @returns {boolean} - Retorna verdadeiro se o motivo for válido, caso contrário, retorna falso.
 */
function validarMotivo() {
    // Obtém o valor do campo de motivo e o elemento de resultado da validação.
    const motivo = document.getElementById("motivo").value;
    const resultado = document.getElementById("validationContato");

    // Verifica se o comprimento do motivo está entre 5 e 50 caracteres.
    if (motivo.length >= 5 && motivo.length <= 50) {
        stylizeCaseValidField(resultado, "Motivo válido ✅");
        return true;
    } else {
        stylizeCaseInvalidField(resultado, "Motivo inválido ✅");
        return false;
    }
}

/**
 * Envia a solicitação do formulário após a validação.
 */
function sendRequest() {
    // Obtém elementos do formulário.
    const form = document.getElementById("form");
    const button = document.getElementById("submit");
    const validator = document.getElementById("validator");
    const returnHomeBtn = document.getElementById("returnHome");

    // Verifica se todos os campos do formulário são válidos.
    if (
        validarNome() == false ||
        validarTelefone() == false ||
        validarEmail() == false ||
        validarMotivo() == false
    ) {
        button.disabled = false;
        button.style.backgroundColor = redColor;
        validator.style.display = "block";
        validator.style.color = redColor;
        validator.textContent = "Por favor, valide os campos, pois nem todos estão corretamente preenchidos!";
    } else {
        // Se todos os campos forem válidos, oculta o formulário e exibe uma mensagem de sucesso.
        button.disabled = true;
        button.style.backgroundColor = redColor;
        form.style.display = "none";
        afterSubmit.style.display = "block";
        afterSubmit.textContent = "Obrigado por testar minha aplicação. Sua finalidade era para a execução de um trabalho da faculdade";
        afterSubmit.style.color = "white";

        returnHomeBtn.style.display = "block";
        returnHomeBtn.textContent = "Voltar à página inicial";
    }
}

// Obtém os elementos para o menu de navegação.
const menuIcon = document.getElementById('menuIcon');
const navLinks = document.getElementById('navLinks');

// Adiciona um EventListener de clique ao ícone do menu para alternar a visibilidade dos links de navegação.
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Adiciona EventListener de clique aos links de navegação para fechar o menu em telas pequenas.
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        // Verifica se a largura da janela é de 768px ou menos e se o menu está ativo.
        if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});
