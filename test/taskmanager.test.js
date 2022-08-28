import TaskManager from '../src/taskmanager.js';

describe('Testing add item & remove item', () => {
  const newList = new TaskManager('tasks');
  test('Add item', () => {
    newList.add('New Task');
    expect(newList.taskList.length).toBe(1);
    newList.add('New Task');
    newList.add('New Task');
    expect(newList.taskList.length).toBe(3);
  });
  test('Remove item', () => {
    newList.remove(3);
    expect(newList.taskList.length).toBe(2);
    newList.remove(1);
    newList.remove(1);
    expect(newList.taskList.length).toBe(0);
  });
  test('Editing the task description', () => {
    const task = newList.add('New Task description');
    newList.updateDescription('Updated Task description', 1);
    expect(task.description).toBe('Updated Task description');
    newList.remove(1);
  });
  test('Update Task Status', () => {
    const task = newList.add('New Task description');
    newList.updateStatus(true, 1);
    expect(task.completed).toBe(true);
    newList.updateStatus(false, 1);
    expect(task.completed).toBe(false);
    newList.remove(1);
  });
  test('Clear Completed Tasks', () => {
    newList.add('New Task description0');
    newList.add('New Task description1');
    newList.add('New Task description2');
    newList.add('New Task description3');
    newList.updateStatus(true, 2);
    newList.updateStatus(true, 3);
    newList.removeCompletedTasks();
    expect(newList.taskList.length).toBe(2);
    expect(newList.taskList[0].description).toBe('New Task description0');
    expect(newList.taskList[1].description).toBe('New Task description3');
    newList.remove(1);
    newList.remove(1);
  });
});