const addTasks = document.querySelector('.add-to-do');
const taskList = document.querySelector('.to-do-list');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function addTask(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=to-do]')).value;
    const task = {
        text,
        done: false,
    };
    tasks.push(task);
    populateList(tasks, taskList);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.querySelector('[name=to-do]').value = '';
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
            <label for="item${i}">${plate.text}</label>
            <button class="btn-rem">Usuń</button>        
         </li>
        `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    tasks[index].done = !tasks[index].done;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateList(tasks, taskList);
}

function removeDone(e) {
    let index = e.target.parentNode.firstElementChild.dataset.index;
    console.log(index);
    taskt = tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    populateList(tasks, taskList);
}

addTasks.addEventListener('submit', addTask);
taskList.addEventListener('click', toggleDone);
populateList(tasks, taskList);
document.querySelectorAll('.btn-rem').forEach(item =>
    item.addEventListener('click', removeDone));