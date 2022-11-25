var numeros
numeros = [];
function Inserir(){
    numeros.push(document.getElementById('valores').value);
    document.getElementById('valores').value = "";
    document.getElementById('valores').focus();
}

function MostrarTodos(){
    document.getElementById('mostrar').innerHTML = numeros;
}

function MostrarMaior(){
    function MaiorNumero(array){
        return Math.max.apply(null, array);
     }
    document.getElementById('mostrar').innerHTML = MaiorNumero(numeros);
}

function MostrarMenor(){
    function MenorNumero(array){
        return Math.min.apply(null, array);
     }
    document.getElementById('mostrar').innerHTML = MenorNumero(numeros);
};
