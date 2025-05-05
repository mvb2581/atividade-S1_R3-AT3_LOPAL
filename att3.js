const numero = parseInt(prompt("Digite um numero  para ver a tabuada de 1 a 10"));
//cria uma constante que tranforma o numero que vai ser digitado no prompt em um numero inteiro
if(!isNaN(numero)){
    let resultado = "";

    for(let i = 1; i <= 10; i++) {
        resultado += numero + " x " + i + " = " + (numero * i) + " | "
    }
alert("Tabuada de " + numero + ": " + resultado);
}else{
alert("Voce digitou u, valor inválido.");
}