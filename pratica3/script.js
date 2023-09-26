let contador = 0
const elementoH1 = document.getElementById("contador")

function contar() {
contador+=1
console.log(contador);
elementoH1.innerHTML=(contador)
    
}

