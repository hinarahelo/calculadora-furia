function obterNumero(id) {
  const el = document.getElementById(id);
  const valor = Number(el.value);
  return Number.isNaN(valor) || valor < 0 ? 0 : valor;
}

function setNumero(id, valor) {
  const el = document.getElementById(id);
  el.value = Math.max(0, valor);
  recalcularTudo();
}

function alterarQuantidade(id, delta) {
  const atual = obterNumero(id);
  setNumero(id, atual + delta);
}

function formatarDinheiro(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function calcularAttachs() {
  const c4 = obterNumero("c4");
  const lanterna = obterNumero("lanterna");
  const pente = obterNumero("pente");
  const empunhadura = obterNumero("empunhadura");
  const silenciador = obterNumero("silenciador");
  const mira = obterNumero("mira");

  const totalAttsSemC4 = lanterna + pente + empunhadura + silenciador + mira;
  const quantidadeTotalItens = c4 + totalAttsSemC4;

  const valorComParceria =
    (c4 * 1500) +
    (lanterna * 300) +
    (pente * 300) +
    (empunhadura * 300) +
    (silenciador * 300) +
    (mira * 300);

  const valorSemParceria =
    (c4 * 2500) +
    (lanterna * 400) +
    (pente * 400) +
    (empunhadura * 400) +
    (silenciador * 400) +
    (mira * 400);

  const ductTape = (c4 * 4) + (totalAttsSemC4 * 5);
  const plastico = (c4 * 4) + (totalAttsSemC4 * 5);
  const tecido = c4 * 4;
  const cobre = c4 * 4;

  document.getElementById("itensAttach").textContent = quantidadeTotalItens;
  document.getElementById("valorParceria").textContent = formatarDinheiro(valorComParceria);
  document.getElementById("valorSemParceria").textContent = formatarDinheiro(valorSemParceria);

  document.getElementById("materialDuctTape").textContent = ductTape;
  document.getElementById("materialPlastico").textContent = plastico;
  document.getElementById("materialTecido").textContent = tecido;
  document.getElementById("materialCobre").textContent = cobre;
}

function calcularLavagem() {
  const bracelete = obterNumero("bracelete");
  const xbox = obterNumero("xbox");
  const notbook = obterNumero("notbook");
  const mouse = obterNumero("mouse");
  const vibrador = obterNumero("vibrador");
  const relogio = obterNumero("relogio");
  const anel = obterNumero("anel");

  const quantidadeItens =
    bracelete + xbox + notbook + mouse + vibrador + relogio + anel;

  const total =
    (bracelete * 600) +
    (xbox * 600) +
    (notbook * 500) +
    (mouse * 200) +
    (vibrador * 200) +
    (relogio * 500) +
    (anel * 1000);

  const valorFac = total * 0.15;
  const valorPessoa = total * 0.85;

  document.getElementById("itensLavagem").textContent = quantidadeItens;
  document.getElementById("totalLavagem").textContent = formatarDinheiro(total);
  document.getElementById("valorPessoa").textContent = formatarDinheiro(valorPessoa);
  document.getElementById("valorFac").textContent = formatarDinheiro(valorFac);
}

function limparAttachs() {
  ["c4", "lanterna", "pente", "empunhadura", "silenciador", "mira"].forEach((id) => {
    document.getElementById(id).value = 0;
  });
  recalcularTudo();
}

function limparLavagem() {
  ["bracelete", "xbox", "notbook", "mouse", "vibrador", "relogio", "anel"].forEach((id) => {
    document.getElementById(id).value = 0;
  });
  recalcularTudo();
}

function recalcularTudo() {
  calcularAttachs();
  calcularLavagem();
}

document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", recalcularTudo);
});

recalcularTudo();
