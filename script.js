const buttonClick = document.querySelector("#button-sortear")

buttonClick.addEventListener("click", function () {
    const valorInicial = Math.ceil(document.querySelector("#valor-inicial").value)
    const valorFinal = Math.floor(document.querySelector("#valor-final").value)

    const ResultadoFinal = Math.floor(Math.random() * (valorFinal - valorInicial + 1)) + valorInicial;

    alert(ResultadoFinal)
})

