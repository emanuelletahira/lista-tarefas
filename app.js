const button = document.getElementById("button");
let input = document.getElementById("input");
const display = document.getElementById("display");

function inserirTarefa(){
  let tarefa = input.value
  display.innerHTML += 
  `<div class="tarefa">
    ${tarefa}
    <div>
    <button class="delete">Delete</button>
    <button class="edit">Edit</button>
    </div>
  </div>`
  input.value = ''
}

button.addEventListener("click", inserirTarefa)