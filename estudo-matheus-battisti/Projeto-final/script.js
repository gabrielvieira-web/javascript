// funcao que adiciona tarefa
function addTask() {

    // titulo da tarefa 
    const taskTitle = document.querySelector("#tarefa").value

    if(taskTitle) {

        // clone template 
        const template = document.querySelector(".template")

        const novaTarefa = template.cloneNode(true)

        // adiciona titulo
        novaTarefa.querySelector(".task-title").textContent = taskTitle

        // remover as classes desnecessarias 
        

        // adiciona tarefa na lista
        const list = document.querySelector("#lista-tarefas")

        console.log(novaTarefa)
        console.log(list)

        list.appendChild(novaTarefa)
        list.style.display = "block"

        // adicionar o evento de remover
        const removeBtn = novaTarefa.querySelector("icons-close").addEventListener("click", function(){

            removeTask(this)

        })

        // limpar texto
        document.querySelector("#tarefa").value = ""

    }

}

// funcao de remover tarefa
function removeTask(task) {
    console.log(task)
}


// evento que adiciona tarefa
const btn = document.querySelector("#botao")

btn.addEventListener("click", function(e){

    e.preventDefault()

    addTask()

})