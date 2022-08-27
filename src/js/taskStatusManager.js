import toDoList from './todolist.js';

export default function updateListItem(status, index) {
  toDoList.updateStatus(status, index);
}

document
  .getElementById('clear-btn')
  // .getElementById('btn')
  .addEventListener('click', () => {
    const elements = document.getElementsByClassName('task-status');
    for (let i = elements.length - 1; i >= 0; i -= 1) {
      if (elements[i].checked) elements[i].parentElement.remove();
    }
    toDoList.removeCompletedTasks();
  });
