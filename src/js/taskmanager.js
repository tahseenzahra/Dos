import Task from './task.js';

export default class TaskManager {
  constructor(key) {
    this.key = key;
    this.taskList = JSON.parse(localStorage.getItem(key)) || [];
  }

    add = (description) => {
      const newTask = new Task(description, this.taskList.length + 1);
      this.taskList.push(newTask);

      localStorage.setItem(this.key, JSON.stringify(this.taskList));
      return newTask;
    }

    updateDescription = (description, index) => {
      this.taskList[index - 1].description = description;

      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    updateStatus = (status, index) => {
      this.taskList[index - 1].completed = status;

      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    updateIndex = () => {
      this.taskList.forEach((task, index) => {
        task.index = index + 1;
      });
    }

    remove = (index) => {
      this.taskList.splice(index - 1, 1);
      this.updateIndex();
      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    removeCompletedTasks = () => {
      this.taskList = this.taskList.filter((task) => (task.completed !== true));
      this.updateIndex();
      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    updateList = (oldIndex, newIndex) => {
      this.taskList.splice(newIndex, 0, this.taskList.splice(oldIndex, 1)[0]);
      this.updateIndex();
      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }

    swap = (index1, index2) => {
      this.taskList[index1 - 1].index = index2;
      this.taskList[index2 - 1].index = index1;
      const temp = this.taskList[index1 - 1];
      this.taskList[index1 - 1] = this.taskList[index2 - 1];
      this.taskList[index2 - 1] = temp;

      localStorage.setItem(this.key, JSON.stringify(this.taskList));
    }
}
