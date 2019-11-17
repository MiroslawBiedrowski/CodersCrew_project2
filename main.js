var tasks = JSON.parse(localStorage.getItem('tasks1')) || [];

function addTask(task) {
    if (typeof task == 'string') {
        tasks.push({
            task,
            done: false
        });
        updateLocalStorage();
        viewTask();
    } else console.log('Podaj nazwę zadania jako tekst');
};

function deleteTask(index) {
    tasks.splice(index, 1);
    updateLocalStorage()
    viewTask();
};

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    updateLocalStorage()
    viewTask();
};

function viewTask() {
    tasks.forEach((element, index) => {
        console.log(index, element)
    });
};

function updateLocalStorage() {
    localStorage.setItem('tasks1', JSON.stringify(tasks));
};