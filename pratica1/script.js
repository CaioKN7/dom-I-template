/* RESUMO
Windows

BUSCAR ELEMENTOS HTML
Mais comuns:
document.getElementById => devolber um onjeto
document.querySelectpr => devolve o primeiro elemento que corresponde ao seletor especificado

MANIPULAR E MODIFICAR O ELEMENTO HTML:
innerHTML

*/

const oSapo = window.document.getElementById("sapo")
//console.log(oSapo.innerHTML);
oSapo.innerHTML +=" pé "

const evidencias = document.getElementById("poema")
//console.log(evidencias.innerHTML);
evidencias.innerHTML += " <b><i> evidências"

document.querySelector("#sabedoria").innerHTML+= " voando "

const tag = document.getElementsByTagName("h4")
//console.log(tag[0].innerHTML);
tag[0].innerHTML+=" nariz de pica-pau"

const classe = document.getElementsByClassName("roberto")
classe[0].innerHTML+= " VIVI"
