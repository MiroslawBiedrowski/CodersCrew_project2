var tasks = JSON.parse(localStorage.getItem('tasks1')) || [];

function addTask(task) {
    tasks.push(task);
    localStorage.setItem('tasks1', JSON.stringify(tasks));
    console.log(`Masz do zrobienia poniższą poniższe rzeczy:`);
    tasks.forEach((element, index) => {
        console.log(index, element)
    });
}