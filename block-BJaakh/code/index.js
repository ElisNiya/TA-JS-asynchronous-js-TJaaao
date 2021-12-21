Create a TODO application using API
Go through this repo https://github.com/AltCampus/basic-todo-api
You will find the information about the URL to fetch data
Create a full CRUD (create, read, update and delete) operations
Display a list of todos on the homepage
Using input add a new todo
Handle toggle (check/uncheck)
Clicking on delete/cross button can delete the todo
Double click to edit the individual todo

let ulRoot = document.querySelector('.todos')
let todoInput = document.querySelctor(`input[type="text"]`)
const baseURL = https://sleepy-falls-37563.herokuapp.com/api/todo

function handleDelete(){
  fetch(baseURL + `todo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
  }).then(() => {
    displayTodos()
  }
}
          
function handleToggle(id, status){
    let data = {
      todo: {
        isCompleted: !status,
      }
    }
  fetch(baseURL + `todo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(() => {
    displayTodos()
  }
}          
function handleEdit(event, id, ) {
  let data = {
    todo: {
      title: !status
    }
  }  
  
  let input = document.createElement("input")
  let p = event.target
  let parent = event.target.parentElement
  parent.replaceChild(input, p)
}
    
    
          
function createUI(data){
  ulRoot = '';
  data.forEach((todo, i) => {
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.type = 'checkbox'
    input.checked = todo.isCompleted;
      input.addEventListener('click', handleToggle(todo._id, todo.isCompleted))

    input.setAttribute('data-id', todo._id)
    let p = document.createElement('p')
    p.innerText = todo.title
    p.addEventListener('dblclick', (event) => handleEdit(event, todo._id))
    
    let span = document.createElement('span')
    span.innerText = 'X'
    span.addEventListener('click', handleDelete(todo._id))
    span.setAttribute('data-id', todo._id)
    li.append(input, p, span)
    
    ulRoot.append(li)
  })
}

function displayToDos(){
  fetch(baseURL + 'todo').then(res => res.json()).then((allTodos) => {
    createUI(allTodos.todos)
  })
}
  
function addTodo(event) {
  if(event.keyCode === 13 && event.target.value.trim()) {
    let data = {
      todo: {
        "title": event.target.value,
        isCompleted: false,
      }
    }
    fetch(baseURL +"todo/", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then() => {
      event.target.value = '';
      displayTodos()
    }
  }
}
  
  todoInput.addEventListener('keyup', addTodo)
  displayToDos()
