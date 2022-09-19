
var quantidade = [1]
var contas = []

function conta(){
    
    var ContaDescri = document.getElementById('txtDescricao').value;
    var ContaValor = parseFloat(document.getElementById('ValorPagar').value);
    var outcontas = document.getElementById('outcontas');
    var outResultado = document.getElementById('outResultado');

    if (ContaDescri == ''){
        alert('Insira uma conta')
        return;
    }

    if (ContaValor <= 0 && ContaValor == ''){
        alert('Digite um valor corretamente')
        return;
    }

    var quantidadesoma = quantidade++       
    
    outcontas.innerHTML += `${ContaDescri} - R$ ${ContaValor}<br />`

    contas.push(ContaValor)    
    
    const total = contas.reduce((total, currentElement) => total + currentElement)

    outResultado.innerHTML = ""
    outResultado.textContent += `${quantidadesoma} conta(s) - no total de: R$${total}`
    
        txtDescricao.value = '';
        ValorPagar.value = '';
        txtDescricao.focus();

        

}
document.getElementById('btnRegistrar').addEventListener('click', conta)


