const numeroAletorio1 = parseInt(prompt("Digite o primeiro número:"));
const numeroAletorio2 = parseInt(prompt("Digite o segundo número:"));
//nessas duas linhas acima, foi criado uma constante junto com um prompt que manda digitar o primeiro numero e o segundo numero 
if (!isNaN(numeroAleatorio1) && !isNaN(numA)) {
  let inicio;
  let fim;
// Define qual número é o menor (início) e qual é o maior (fim)
  if (num1 < num2) {
    inicio = num1;
    fim = num2;
  } else {
    inicio = num2;
    fim = num1;
  }

  let pares = "";
// Percorre do menor até o maior número
  for (let i = inicio; i <= fim; i++) {
     // Se o número for par, adiciona à string 'pares'
    if (i % 2 === 0) {

      pares += i + " ";
    }
  }
 // Exibe os números pares encontrados
  alert("Números pares entre " + inicio + " e " + fim + ": " + pares);
} else {
  alert("Você digitou um número inválido.");
}