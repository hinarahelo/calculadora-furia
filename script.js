function calcularAttach(){

let c4 = document.getElementById("c4").value
let lanterna = document.getElementById("lanterna").value
let pente = document.getElementById("pente").value
let empunhadura = document.getElementById("empunhadura").value
let silenciador = document.getElementById("silenciador").value
let mira = document.getElementById("mira").value

let parceria =
(c4*1500)+
(lanterna*300)+
(pente*300)+
(empunhadura*300)+
(silenciador*300)+
(mira*300)

let normal =
(c4*2500)+
(lanterna*400)+
(pente*400)+
(empunhadura*400)+
(silenciador*400)+
(mira*400)

document.getElementById("valorParceria").innerText = parceria
document.getElementById("valorNormal").innerText = normal

}



function calcularLavagem(){

let bracelete = document.getElementById("bracelete").value
let xbox = document.getElementById("xbox").value
let notebook = document.getElementById("notebook").value
let mouse = document.getElementById("mouse").value
let vibrador = document.getElementById("vibrador").value
let relogio = document.getElementById("relogio").value
let anel = document.getElementById("anel").value

let total =
(bracelete*600)+
(xbox*600)+
(notebook*500)+
(mouse*200)+
(vibrador*200)+
(relogio*500)+
(anel*1000)

let fac = total*0.15
let pessoa = total*0.85

document.getElementById("totalLavagem").innerText = total
document.getElementById("valorFac").innerText = fac
document.getElementById("valorPessoa").innerText = pessoa

}
