const addTasks = document.querySelector('.add-to-do');
const taskList = document.querySelector('.to-do-list');
const tasks = [];

function addTask(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=to-do]')).value;
    const task = {
        text,
        done: false,
    }
    tasks.push(task);
    this.querySelector('[name=to-do]').value = '';
}

addTasks.addEventListener('submit', addTask);