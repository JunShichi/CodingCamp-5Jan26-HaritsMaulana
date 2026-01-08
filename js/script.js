// Persistent todo list using localStorage (no dummy storage required)
const STORAGE_KEY = 'yama_todo_list_v1';

// Load from localStorage or fall back to sample items
let todo = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null') || [];

function saveTodos() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todo));
    } catch (e) {
        console.warn('Could not save todos to localStorage', e);
    }
}

function renderTodoList(list = todo) {
    const tbody = document.getElementById('todo-tbody');
    tbody.innerHTML = '';
    list.forEach(item => {
        const tr = document.createElement('tr');
        tr.className = 'todo-row';

        const tdTask = document.createElement('td');
        tdTask.className = 'task';
        tdTask.textContent = item.task;

        const tdDate = document.createElement('td');
        tdDate.className = 'date';
        tdDate.textContent = item.date;

        tr.appendChild(tdTask);
        tr.appendChild(tdDate);
        tbody.appendChild(tr);
    });
}

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoDate = document.getElementById('date-input');
    if (!todoInput.value || !todoDate.value) {
        alert('Please enter both a to-do item and a date.');
        return;
    }
    todo.push({ task: todoInput.value.trim(), date: todoDate.value });
    todoInput.value = '';
    todoDate.value = '';
    saveTodos();
    renderTodoList();
}

function removeAllTodo() {
    if (!confirm('Clear all todos?')) return;
    todo = [];
    saveTodos();
    renderTodoList();
}

function filterTodo() {
    const keyword = document.getElementById('todo-input').value.trim().toLowerCase();
    if (!keyword) {
        renderTodoList();
        return;
    }
    const filtered = todo.filter(t => t.task.toLowerCase().includes(keyword) || t.date.includes(keyword));
    renderTodoList(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-button').addEventListener('click', addTodo);
    document.getElementById('clear-button').addEventListener('click', removeAllTodo);
    document.getElementById('filter-button').addEventListener('click', filterTodo);
    renderTodoList();
});