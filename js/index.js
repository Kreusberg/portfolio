function validarNome() {
    const nome = document.getElementById("nome").value;
    const resultado = document.getElementById("validationNome");

    // Expressão regular simples para validar e-mail
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (nome.length >= 5 && nome.length <= 50) {
        resultado.textContent = "Nome válido ✅";
        resultado.style.display = "block";
        resultado.style.color = "green";
        return true;
    } else {
        resultado.textContent = "Nome inválido ❌";
        resultado.style.display = "block";
        resultado.style.color = "red";
        return false;
    }
}

function validarTelefone() {
    const telefone = document.getElementById("telefone").value;
    const resultado = document.getElementById("validationTelefone");

    // Expressão regular simples para validar e-mail
    const regex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (regex.test(telefone)) {
        resultado.textContent = "Telefone válido ✅";
        resultado.style.display = "block";
        resultado.style.color = "green";
        return true;
    } else {
        resultado.textContent = "Telefone inválido ❌";
        resultado.style.display = "block";
        resultado.style.color = "red";
        return false;
    }
}

function validarEmail() {
    const email = document.getElementById("email").value;
    const resultado = document.getElementById("validationEmail");

    // Expressão regular simples para validar e-mail
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        resultado.textContent = "Email válido ✅";
        resultado.style.display = "block";
        resultado.style.color = "green";
        return true;
    } else {
        resultado.textContent = "Email inválido ❌";
        resultado.style.display = "block";
        resultado.style.color = "red";
        return false;
    }
}

function sendRequest() {
    const form = document.getElementById("form");
    const button = document.getElementById("submit");
    const validator = document.getElementById("validator");
    const returnHomeBtn = document.getElementById("returnHome");
    

    if (validarNome() == false || validarTelefone() == false || validarEmail() == false) {
        button.disabled = false;
        button.style.backgroundColor = "red";
        validator.style.display = "block";
        validator.style.color = "red";
        validator.textContent = "Por favor, valide os campos, pois nem todos estão corretamente preenchidos!";
    } else {
        console.log("pode seguir");
        button.disabled = true;
        button.style.backgroundColor = "red";
        form.style.display = "none";
        afterSubmit.style.display = "block";
        afterSubmit.textContent = "Obrigado por testar minha aplicação. Sua finalidade era para a execução de um trabalho da faculdade";
        afterSubmit.style.color = "white";

        returnHomeBtn.style.display = "block";
        returnHomeBtn.textContent = "Go back home";
    }

}
