function mostrar(i,c){
    document.getElementById('numeros').innerHTML = "";
    i = 0
    c = document.getElementById('num').value
    do{
    document.getElementById('numeros').innerHTML += i + ", ";
    i = i + 2;
}   while (i<=c);
}