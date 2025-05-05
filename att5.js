const numAle1 = parseInt(prompt("Insira o primeiro número:")); // A variável numAle1 solicita que o usuário escolha um número.
const numAle2 = parseInt(prompt("Insira o segundo número:"));// A variável numAle2 solicita que o usuário escolha um número.

if (!isNaN(numAle1) && !isNaN(numAle2)) {
  let inicio;
  let fim;

  if (numAle1 < numAle2) {
    inicio = numAle1;
    fim = numAle2;
  } else {
    inicio = numAle2;
    fim = numAle1;
  }

  let pares = "";

  for (let i = inicio; i <= fim; i++) { // Mostra todo os números pares entre os números escolhidos pelo usuário;
    if (i % 2 === 0) {

      pares += i + " ";
      
    }
  }

  alert("Números pares entre " + inicio + " e " + fim + ": " + pares);
} else {
  alert("Você digitou um número inválido!):");
}
