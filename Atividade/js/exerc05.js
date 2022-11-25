function preco(){
    let l, c, total, preco
    l = document.getElementById('l').value;
    c = document.getElementById('c').value;
    total = c * l;
    preco = 36 * total
    document.getElementById('mostrar').innerHTML = "O preço total desse assento é, em R$: "+ preco+",00";
}