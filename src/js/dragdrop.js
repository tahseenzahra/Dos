import Sortable from 'sortablejs';
import toDoList from './todolist.js';

Sortable.create(document.getElementById('todo-list'), {
  handle: '.task-drag-icon',
  animation: 150,
  onUpdate(event) {
    toDoList.updateList(event.oldIndex, event.newIndex);
  },
});