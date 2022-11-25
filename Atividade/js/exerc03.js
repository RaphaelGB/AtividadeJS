
var Nome, Quant, Valor;
Nome = [];
Quant = [];
Valor = [];

function Inserir(){
    Nome.push(document.getElementById('nome').value);
    Valor.push(document.getElementById('valor').value);
    Quant.push(document.getElementById('quant').value);
    document.getElementById('quant').value = "";
    document.getElementById('valor').value = "";
    document.getElementById('nome').value = "";
}

function ValorTotal(){
    var i, c, Total, Compra
    c = 0; 
    i = 0;
    Compra = 0;
    Total = [];
    while (i != Valor.length){
        Total[i] = Valor[i] * Quant[i];
        document.getElementById('exibir').innerHTML += Nome[i] + ": R$" + Total[i]+ ",00<br>";
        i++;
    };

    while (c != Valor.length){
        Compra = Compra + Total[c];
        c++;    
        console.log(Compra);
        console.log(Total);
        console.log(c);
    }
    document.getElementById('exibir').innerHTML += "------------------------------------------------------------------------- <br>";
    document.getElementById('exibir').innerHTML += "Total: R$"+ Compra + ",00 <br>";
    console.log(Compra);
    console.log(Total);
}