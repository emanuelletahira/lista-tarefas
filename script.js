const botao = document.getElementById("btnAdicionar");
const input = document.getElementById("tarefa");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {

  const li = document.createElement("li");

  li.innerHTML = `
    ${input.value}
    <button onclick="editar(this)">Editar</button>
    <button onclick="remover(this)">X</button>
  `;

  lista.appendChild(li);

  input.value = "";
});

function remover(botao) {
  botao.parentElement.remove();
}

function editar(botao) {
  const li = botao.parentElement;

  const novoTexto = prompt("Editar tarefa:");

  if (novoTexto) {
    li.firstChild.textContent = novoTexto + " ";
  }
}