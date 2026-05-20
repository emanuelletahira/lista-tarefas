const button = document.getElementById("button");
let input = document.getElementById("input");
const display = document.getElementById("display");

function inserirTarefa(){
  let tarefa = input.value
  display.innerHTML += `<p>${tarefa}</p>`
  input.value = ''
}



button.addEventListener("click", inserirTarefa)