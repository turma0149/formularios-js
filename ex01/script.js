const formEx01 = document.getElementById("formEx01");

formEx01.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");

    if (nome.value.trim() == "") {
        nome.classList.add("is-invalid");
        nome.classList.remove("is-valid");
    } else {
        nome.classList.add("is-valid");
        nome.classList.remove("is-invalid");
    }

    if (cpf.value.trim() == "") {
        cpf.classList.add("is-invalid");
        cpf.classList.remove("is-valid");
    } else {
        cpf.classList.add("is-valid");
        cpf.classList.remove("is-invalid");
    }

    console.log("Nome: " + nome.value);
    console.log("Cpf: " + cpf.value);

});