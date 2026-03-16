function dinheiro(valor){

return valor.toLocaleString('pt-BR',{

style:'currency',
currency:'BRL'

})

}



function calcularAttach(){

let c4 = Number(document.getElementById("c4").value)
let lanterna = Number(document.getElementById("lanterna").value)
let pente = Number(document.getElementById("pente").value)
let emp = Number(document.getElementById("empunhadura").value)
let sil = Number(document.getElementById("silenciador").value)
let mira = Number(document.getElementById("mira").value)

let itens = c4+lanterna+pente+emp+sil+mira

let parceria =
(c4*1500)+
(lanterna*300)+
(pente*300)+
(emp*300)+
(sil*300)+
(mira*300)

let normal =
(c4*2500)+
(lanterna*400)+
(pente*400)+
(emp*400)+
(sil*400)+
(mira*400)

document.getElementById("itensAttach").innerText = itens
document.getElementById("valorParceria").innerText = dinheiro(parceria)
document.getElementById("valorNormal").innerText = dinheiro(normal)

}



function calcularLavagem(){

let brace = Number(document.getElementById("bracelete").value)
let xbox = Number(document.getElementById("xbox").value)
let note = Number(document.getElementById("notebook").value)
let mouse = Number(document.getElementById("mouse").value)
let vib = Number(document.getElementById("vibrador").value)
let rel = Number(document.getElementById("relogio").value)
let anel = Number(document.getElementById("anel").value)

let itens = brace+xbox+note+mouse+vib+rel+anel

let total =
(brace*600)+
(xbox*600)+
(note*500)+
(mouse*200)+
(vib*200)+
(rel*500)+
(anel*1000)

let fac = total*0.15
let pessoa = total*0.85

document.getElementById("itensLavagem").innerText = itens
document.getElementById("totalLavagem").innerText = dinheiro(total)
document.getElementById("valorFac").innerText = dinheiro(fac)
document.getElementById("valorPessoa").innerText = dinheiro(pessoa)

}
