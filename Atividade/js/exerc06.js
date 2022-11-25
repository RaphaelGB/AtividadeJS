function pesoIdeal() {
    let s, h, pesoIdeal
    s = document.getElementById('s').value;
    h = document.getElementById('h').value;
    
    if(s==='F'){ 
    pesoIdeal = (62.1 * h) - 44.7
    } else {
    pesoIdeal = (72.7 * h) - 58
    };
    
    document.getElementById('mostrar').innerHTML = "O peso ideal, em kg: " + pesoIdeal + ".";
}