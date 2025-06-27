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
