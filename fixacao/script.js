const pegarTexto = document.querySelector("#paragrafo")
console.log(pegarTexto.innerHTML);


const inputTexto = document.getElementById("texto")
function tecla() {
    console.log(inputTexto.value);
    
}


function enviarValor() {
    pegarTexto.innerHTML = inputTexto.value
    
}



