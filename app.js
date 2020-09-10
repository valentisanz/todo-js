//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')
//Event listeners
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteComplete)
//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault()
    /*
    <div class="todo">
        <li></li>
        <button>delete</button>
        <button>complete</button>
    </div>
    */
    if (todoInput.value.length > 0) { //create div
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //create li
        const newTodo = document.createElement('li')
        newTodo.innerText = todoInput.value
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        //complete button
        const completeButton = document.createElement('button')
        completeButton.innerHTML = '<i class="fas fa-check"></i>'
        completeButton.classList.add('complete-btn')
        todoDiv.appendChild(completeButton)
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
}

function deleteComplete(e) {
    const item = e.target
    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement
        //animation
        todo.classList.toggle('deleted')
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
        //todo.remove()
    }
    //complete todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo() {

}