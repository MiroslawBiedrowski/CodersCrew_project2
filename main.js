var tasks = JSON.parse(localStorage.getItem('tasks1')) || [];

function addTask(task) {
    tasks.push({
        task,
        done: false
    });
    localStorage.setItem('tasks1', JSON.stringify(tasks));
    console.log(`Aktualnie masz do zrobienia poniższą poniższe rzeczy:`);
    tasks.forEach((element, index) => {
        console.log(index, element)
    });
};

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks1', JSON.stringify(tasks));
    console.log(`Aktualnie masz do zrobienia poniższą poniższe rzeczy:`);
    tasks.forEach((element, index) => {
        console.log(index, element)
    });
};

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem('tasks1', JSON.stringify(tasks));
    console.log(`Aktualnie masz do zrobienia poniższą poniższe rzeczy:`);
    tasks.forEach((element, index) => {
        console.log(index, element)
    });
};