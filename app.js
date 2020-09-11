//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//Event listeners
document.addEventListener('DOMContentLoaded', getTodos)
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteComplete)
filterOption.addEventListener('change', filterTodo)

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
        //add todo to local storage
        saveLocalTodos(todoInput.value)
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

function deleteComplete(event) {
    const item = event.target
    //delete todo
    if (item.classList[0] === 'delete-btn') {
        const todo = item.parentElement
        //animation
        todo.classList.toggle('deleted')
        deleteLocalTodos(todo)
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }
    //complete todo
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement
        console.log(todo)
        todo.classList.toggle('completed')
        let todos
        //check local storage
        if (localStorage.getItem('todos') === null) {
            todos = []
        } else {
            todos = JSON.parse(localStorage.getItem('todos'))
        }
        const todoValue = todo.innerText
        todos.forEach(todo => {
            if (todo.title === todoValue) {
                todo.complete = !todo.complete
            }
        })
        localStorage.setItem('todos', JSON.stringify(todos))
    }
}

function filterTodo(event) {
    const todos = todoList.childNodes
    todos.forEach(function (todo) {
        switch (event.target.value) {
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = 'none'
                }
                break;
        }
    })
}

function saveLocalTodos(todo) {
    let todos
    //check local storage
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push({
        'title': todo,
        'complete': false
    })
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos() {
    let todos
    //check local storage
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        if (todo.complete == true) todoDiv.classList.add('completed')
        //create li
        const newTodo = document.createElement('li')
        newTodo.innerText = todo.title
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
    })
}

function deleteLocalTodos(todo) {
    let todos
    //check local storage
    if (localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoValue = todo.children[0].innerText
    /*todos.forEach((todo, index) => {
        if (todo.title === todoValue) {
            todos.splice(index, 1)
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    })*/
}