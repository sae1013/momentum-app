const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoInput = document.querySelector('#todo-form input');
let todos = [];

const saveTodos = () => {
    localStorage.setItem('todos',JSON.stringify(todos));
}

const loadTodos = () => {
    const loadedTodos = JSON.parse(localStorage.getItem('todos'));
    if(loadedTodos){
        todos = loadedTodos;
        todos.forEach((todo)=>{
            paintTodo(todo);
        });
    }
}

const handleTodoSubmit = (event) => {    
    event.preventDefault();
    const id = Date.now()
    const newTodo = {id:id,text:todoInput.value};
    todoInput.value = "";
    todos.push(newTodo); 
    paintTodo(newTodo);
    saveTodos();
}
const completeTodo = (event) => {
    const span = event.target;
    span.classList.toggle('complete');
    
}
const paintTodo = (todo) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.addEventListener('click',deleteTodo);
    span.addEventListener('click',completeTodo);
    
    button.className='del-btn'
    button.innerText = 'X'
    span.innerText = todo.text;
    li.id = todo.id;
    li.appendChild(span);
    li.appendChild(button);
    todoList.append(li);
}

const deleteTodo = (event) => {
    event.preventDefault();
    const li = event.target.parentNode;
    const deleteId = li.id;
    li.remove();
    todos = todos.filter((todo)=>{
        return todo.id !== +deleteId
    });

    saveTodos();
}

todoForm.addEventListener('submit',handleTodoSubmit);
loadTodos();
