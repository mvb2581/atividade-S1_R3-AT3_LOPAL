const num = parseInt(prompt("Digite um número:"));
//cria uma constante que tranforma o numero que vai ser digitado no prompt em um numero inteiro
if(isNaN(num) || num <=1) {
    //ele vai captar se escreveu um número ou não 
    alert("Erro, voce não escreveu um número");
} else {

    let sequencia = ""

    for (let i = 1; i <= num ; i++) 
       { sequencia = sequencia+ " " + i;

       }
        alert(sequencia);
    
}
    