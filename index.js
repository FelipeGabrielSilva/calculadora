const calculadora = document.getElementById("header");
const key = document.getElementById("tecla");

let numeroAtual = "0";
let proximoNumero = "";
let operador = null;

key.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const chave = e.target;
    const acao = chave.dataset.acao;

    if (!acao) {
      console.log("Chave número!");
    }

    if (
      acao == "somar" ||
      acao == "subtrair" ||
      acao == "multiplicar" ||
      acao == "dividir"
    ) {
      console.log("Operação escolhida!");
    }

    if (acao == "decimal") {
      console.log("Operação decimal escolhida!");
    }

    if (acao == "limpar") {
      console.log("Operação limpar escolhida!");
    }

    if (acao == "calcular") {
      console.log("Operação calcular escolhida!");
    }
  }
});
