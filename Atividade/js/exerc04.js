function gasto(){

    var Km = document.getElementById('km').value;
    var valorC = document.getElementById('combustivel').value;
    var Valorkm = valorC/8;
    var Valor = Valorkm*Km;
    document.getElementById('mostrar').innerHTML = "Valor do combustivel gasto foi: " + Valor + "R$.";
}