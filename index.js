function validarTelefone() {
    const telefone = document.getElementById("telefone").value;
    const resultado = document.getElementById("validationTelefone");

    // Expressão regular simples para validar e-mail
    const regexTelefone = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

    if (regexTelefone.test(telefone)) {
        resultado.textContent = "Telefone válido ✅";
        resultado.style.display = "block";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Telefone inválido ❌";
        resultado.style.display = "block";
        resultado.style.color = "red";
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
    } else {
        resultado.textContent = "Email inválido ❌";
        resultado.style.display = "block";
        resultado.style.color = "red";
    }
}
