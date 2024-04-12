// Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
// Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o
// valor total da compra efetuada e um código que identifique se o comprador é um cliente comum (1), funcionário (2) ou vip (3).


function calcularDesconto (codigo, valorTotal) {
    var desconto;
    switch(codigo) {
        case 1: //Cliente comum
            desconto = 0;
            break;
        case 2: //Funcionário
            desconto = 0.10; //10% de desconto
            break;
        case 3: //VIP
            desconto = 0.05; //5% de desconto
            break;
        default:
            console.log("Código Inválido");
            return    
    }

    var valorComDesconto = valorTotal - (valorTotal*desconto);
        return valorComDesconto;
}

//Testando a função
    var codigo = 2; //Suponha que o código seja 2 (Funcionário)
    var valorTotal = 100; //Suponha que o valor total da compra seja 100
    var valorFinal = calcularDesconto(codigo, valorTotal);

console.log ("O valor final com desconto é:" + valorFinal);
console.log ("O código do cliente é:" + codigo);



//entrada de dados
// = determinar se o cliente é 1- cliente, 2- funcionário e 3-vip
// = informar o total da compra 

//processamento de dados
// = usar a estrutura switch case para determinar se é cliente, funcionário ou vip

//saída de dados
// = se for cliente não haverá desconto
// = se for funcionário terá 10% de desconto
// = se for vip terá 5% de desconto