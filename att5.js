const numeroAleatorio1 = parseInt(prompt("Insira o primeiro número:")); // A variável solicita que o usuário escolha um número.
const numeroAleatorio2 = parseInt(prompt("Insira o segundo número:"));// A variável solicita que o usuário escolha um número.

if (!isNaN(numeroAleatorio1) && !isNaN(numeroAleatorio2)) {
  let inicio;
  let fim;

  if (numeroAleatorio1 < numeroAleatorio2) {
    inicio = numeroAleatorio1;
    fim = numeroAleatorio2;
  } else {
    inicio = numeroAleatorio2;
    fim = numeroAleatorio1;
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
