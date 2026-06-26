// Capturar o formulário 
const formEx01 = document.getElementById("formEx01");

formEx01.addEventListener("submit", function (evento) {

    evento.preventDefault();

    //Capturar inputs do html
    const nome = document.getElementById("nome");
    const cpf = document.getElementById("cpf");

    //Testar nome 
    if(nome.value.trim() == ""){
        // invalido 
        nome.classList.add("is-invalid")
        nome.classList.remove("is-valid")
    } else {
        // valido
        nome.classList.add("is-valid");
        nome.classList.remove("is-invalid")
    }


});
