const formAddTodo = document.querySelector('.add-todo')
const todosContainer = document.querySelector('.todos-container')

const validateInputValue = inputValue => {

  if(inputValue) {
    todosContainer.innerHTML += `
    <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded">
      <span>${inputValue}</span>
      <i class="fas fa-times delete"></i>
    </li>
  `
  }
}

const addTodo = e => {
  e.preventDefault()

  const inputValue = e.target.add.value.trim()
  validateInputValue(inputValue)

  formAddTodo.reset()
}

const removeTodo = e => {
  
  const clickedElement = e.target
  const clickedElementClassList = Array.from(clickedElement.classList)
  const clickedElementParent = clickedElement.parentElement
  
  if(clickedElementClassList.includes('delete')) {
    clickedElementParent.remove()
  }
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)

