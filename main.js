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
    if (typeof index == 'number') {
        tasks.splice(index, 1);
        updateLocalStorage()
        viewTask();
    } else console.log('Podaj numer funkcji, którą chcesz usunąć');
};

function toggleTask(index) {
    tasks[index].done = !tasks[index].done;
    updateLocalStorage()
    viewTask();
};

function viewTask() {
    console.table(tasks);
};

function updateLocalStorage() {
    localStorage.setItem('tasks1', JSON.stringify(tasks));
};

function changeTaskName(number, name) {
    if (typeof name == 'string' && typeof number == 'number') {
        tasks[number].task = name;
    } else console.log('Jako pierwszy parametr podaj numer funkcji, jako drugi podaj nową nazwę')
}

function aplicationToDo() {
    return console.log("Witam w mojej aplikacji 'TODO'. Możesz w niej prowadzić spis rzeczy do zrobienia. \nAplikacja posiada szereg ciekawych funkcjonalności. \nMożesz użyć poniższych funkcji:\n*viewTask() - wyświetla listę wszystkich dostępnych rzeczy do zrobienia \n*deleteTask(index) - usuwa podaną w par. ()index pozycję z listy \n*toggleTask(index) - podaj numer indekxu jako parametr, a dane zadanie zostanie uznane za wykonane \n*function viewTask() - wyświetla listę wszystkich zadań do wykonania \n*changeTaskName(number, name) - pozwala zmienić nazwę zadania. Jako parametry wymaga podania numeru zadania (number) oraz nowej nazwy zadania (name)");
};

aplicationToDo()