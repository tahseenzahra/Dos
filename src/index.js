import './style.css';
import dragDropIcon from './images/drag-drop-icon.svg';

const toDoTask = [
  {
    description: 'task1',
    completed: false,
    index: 0,
  },
  {
    description: 'task2',
    completed: false,
    index: 1,
  },
  {
    description: 'task3',
    completed: false,
    index: 2,
  },
];

function getTaskList(task) {
  const toDoTaskItem = document.createElement('li');
  toDoTaskItem.classList.add('todo-list-item');
  {
    const toDoTaskStatus = document.createElement('input');
    toDoTaskStatus.type = 'checkbox';
    toDoTaskStatus.checked = task.completed;
    toDoTaskStatus.classList.add('task-status');
    toDoTaskItem.appendChild(toDoTaskStatus);
  }
  {
    const toDoTaskDescription = document.createElement('p');
    toDoTaskDescription.textContent = task.description;
    toDoTaskDescription.classList.add('task-description');
    toDoTaskItem.appendChild(toDoTaskDescription);
  }
  {
    const toDoTaskplaceicon = document.createElement('img');
    // toDoTaskplaceicon.src = '.images/drag-drop-icon.svg';
    toDoTaskplaceicon.src = dragDropIcon;
    toDoTaskplaceicon.checked = task.completed;
    toDoTaskplaceicon.classList.add('drop-drag-icon');
    toDoTaskItem.appendChild(toDoTaskplaceicon);
  }
  return toDoTaskItem;
}

function updateTaskListToHTML() {
  toDoTask.forEach((task) => document.getElementById('todo-list').appendChild(getTaskList(task)));
}

updateTaskListToHTML();
