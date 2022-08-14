import './style.css';
// import TaskManager from './taskmanager.js';
import dragDropIcon from './images/drag-drop-icon.svg';
import deleteIcon from './images/delete-icon.svg';
import toDoList from './todolist.js';
import updateListItem from './taskStatusManager.js';
import './dragdrop.js';

// const toDoTask = new TaskManager('Dolist');

function getTaskList(task) {
  const toDoTaskItem = document.createElement('li');
  let focusedItem = false;
  toDoTaskItem.classList.add('todo-list-item');
  {
    const toDoTaskStatus = document.createElement('input');
    toDoTaskStatus.type = 'checkbox';
    toDoTaskStatus.checked = task.completed;
    toDoTaskStatus.addEventListener('change', () => {
      if (!toDoTaskStatus.checketodoTaskElementd) toDoTaskStatus.nextSibling.style.textDecoration = 'none';
      else toDoTaskStatus.nextSibling.style.textDecoration = 'line-through';
      updateListItem(toDoTaskStatus.checked, task.index);
    });
    toDoTaskStatus.classList.add('task-status');
    toDoTaskItem.appendChild(toDoTaskStatus);
  }
  {
    const toDoTaskDescription = document.createElement('textarea');
    toDoTaskDescription.value = task.description;
    toDoTaskDescription.classList.add('task-description');

    if (toDoTaskItem.firstChild.checked) toDoTaskDescription.style.textDecoration = 'line-through';

    toDoTaskDescription.addEventListener('keyup', (event) => {
      toDoTask.updateDescription(event.target.value, task.index);
    });

    toDoTaskDescription.addEventListener('focus', (event) => {
      focusedItem = true;
      event.target.nextSibling.src = deleteIcon;
      event.target.nextSibling.alt = 'delete';
      event.target.nextSibling.className = 'delete-icon';
      event.target.style.backgroundColor = '#fffeca';
      event.target.parentElement.style.backgroundColor = '#fffeca';
    });

    toDoTaskDescription.addEventListener('blur', (event) => {
      focusedItem = false;
      event.target.nextSibling.src = dragDropIcon;
      event.target.nextSibling.alt = 'drag drop';
      event.target.nextSibling.className = 'task-drag-icon';
      event.target.style.backgroundColor = '';
      event.target.parentElement.style.backgroundColor = '';
    });

    toDoTaskItem.appendChild(toDoTaskDescription);
  }
  {
    const toDoTaskplaceicon = document.createElement('img');
    toDoTaskplaceicon.src = dragDropIcon;
    toDoTaskplaceicon.alt = 'drag drop';
    // toDoTaskplaceicon.checked = task.completed;
    toDoTaskplaceicon.className = 'drop-drag-icon';
    toDoTaskplaceicon.addEventListener('mousedown', () => {
      if (focusedItem) {
        toDoTaskItem.remove();
        toDoTask.remove(task.index);
      }
    });
    toDoTaskItem.appendChild(toDoTaskplaceicon);
  }
  return toDoTaskItem;
}

function updateTaskListToHTML() {
  toDoTask.taskList.forEach((task) => document.getElementById('todo-list').appendChild(getTaskList(task)));
}
function addTask(description) {
  if (description) { document.getElementById('todo-list').appendChild(getListItem(toDoList.add(description))); }
}

const addTaskElement = document.getElementById('list-add');
// console.log("i am outside keypress call");
addTaskElement.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    // console.log("i am inside keypress call");
    event.preventDefault();
    addTask(event.target.value);
    event.target.value = '';
  }
});

document.querySelector('#list-add-container > img').addEventListener('click', (event) => {
  // console.log("i am inside query selector call");
  event.preventDefault();
  addTask(addTaskElement.value);
  addTaskElement.value = '';
});
updateTaskListToHTML();
