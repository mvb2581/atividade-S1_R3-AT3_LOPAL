let soma = 0;

for (let i =1; i <= 10; i++) {
    const numero = parseInt(prompt(`Digite o ${i}º número inteiro`));
// cria uma constante, parseint faz com que o número que foi colocado vire um algarismo inteiro
    if(!isNaN(numero)){
        soma += numero;
        //o isNaN verifica se foi colocado um número ou uma letra 
    }else{
        alert("Voce digitou um valor inválido. Será considerado como 0.");
    }
}

alert("A soma dos 10 números é: " + soma)