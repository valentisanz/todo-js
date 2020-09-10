//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
//Event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault()
    /*
    <div class="todo">
        <li></li>
        <button>delete</button>
        <button>checked</button>
    </div>
    */
    //create div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    //check button
    const checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add('check-btn')
    todoDiv.appendChild(checkButton)
    //delete button
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton)
    //append to list ul
    todoList.appendChild(todoDiv)
    //clear input value
    todoInput.value = ''
}

function deleteCheck(e) {
    const item = e.target
    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement
        todo.remove()
    }
    //check todo
    if (item.classList[0] === 'check-btn') {
        const todo = item.parentElement
        todo.remove()
    }
}