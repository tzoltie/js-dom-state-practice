const toDoInput = document.querySelector('#todo-input')
const button = document.querySelector('#add-todo')
const toDoListElement = document.querySelector('#todo-list')

const todoList = [
    { title: 'Build me', isCompleted: false},
    { title: 'I should show on the screen', isCompleted: false}
]

button.addEventListener('click', addToDo)

function addToDo() {
    const newToDo = {
        title: toDoInput.value,
        isCompleted: false
    }

    todoList.push(newToDo)
    toDoInput.value = ''

    // <li>Build me <input type="checkbox"/><li>
    const toDoElement = document.createElement('li')
    toDoElement.innerText = newToDo.title
    toDoListElement.append(toDoElement)

    render()
}

function removeToDo(index) {

    todoList.splice(index, 1)
    render()
}

function setCompleted(index) {

    todoList[index].isCompleted = !todoList[index].isCompleted 
    // this this is a modified if statement that set the statement, to the opposite
    render()
}

function setPriority() {

    todoList
}

function render() {
    toDoListElement.innerHTML = ''
    todoList.forEach((toDoItem, index) => {

        
        const toDoElement = document.createElement('li')

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = toDoItem.isCompleted
        checkbox.addEventListener('change', () => {})

        const removeBtn = document.createElement('button')
        removeBtn.innerText = 'Remove'
        removeBtn.classList.add('remove')
        removeBtn.addEventListener('click', () => removeToDo(index))


        
        const dateTimeInput = document.createElement('input')
        dateTimeInput.type = 'datetime-local'
        dateTimeInput.id = 'date'
        const dateTimeLabel = document.createElement('label')
        dateTimeLabel.setAttribute('for', 'date')
        dateTimeLabel.innerText = 'Complete by:'
        

        toDoElement.innerText = toDoItem.title
        toDoElement.append(checkbox)
        toDoElement.append(removeBtn)
        toDoElement.append(dateTimeLabel)
        toDoElement.append(dateTimeInput)
        toDoListElement.append(toDoElement)
    })
}

render()




