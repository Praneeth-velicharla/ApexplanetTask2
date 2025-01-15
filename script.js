document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('main').style.display = 'none';
    document.getElementById('todoSection').style.display = 'block';
});

const todoInput = document.getElementById('todoInput');
const addTodoButton = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

addTodoButton.addEventListener('click', () => {
    const task = todoInput.value.trim();

    if (!task) {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = task;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => li.remove());

    li.appendChild(deleteButton);
    todoList.appendChild(li);

    todoInput.value = '';
});