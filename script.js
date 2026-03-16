function obterNumero(id) {
  const valor = Number(document.getElementById(id).value);
  return Number.isNaN(valor) || valor < 0 ? 0 : valor;
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

  // Materiais
  // C4 = 4 de cada componente
  // Cada att = duct tape 5 + plástico 5
  const ductTape = (c4 * 4) + (totalAttsSemC4 * 5);
  const tecido = c4 * 4;
  const cobre = c4 * 4;
  const plastico = (c4 * 4) + (totalAttsSemC4 * 5);

  document.getElementById("itensAttach").textContent = quantidadeTotalItens;
  document.getElementById("valorParceria").textContent = formatarDinheiro(valorComParceria);
  document.getElementById("valorSemParceria").textContent = formatarDinheiro(valorSemParceria);

  document.getElementById("materialDuctTape").textContent = ductTape;
  document.getElementById("materialTecido").textContent = tecido;
  document.getElementById("materialCobre").textContent = cobre;
  document.getElementById("materialPlastico").textContent = plastico;
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

function recalcularTudo() {
  calcularAttachs();
  calcularLavagem();
}

document.getElementById("btnAttach").addEventListener("click", calcularAttachs);
document.getElementById("btnLavagem").addEventListener("click", calcularLavagem);

document.querySelectorAll('input[type="number"]').forEach((input) => {
  input.addEventListener("input", recalcularTudo);
});

// cálculo inicial
recalcularTudo();
