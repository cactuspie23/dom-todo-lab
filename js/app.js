const input = document.getElementById('input')
const button = document.getElementById('submit-button')
const ul = document.getElementById('todo-list')
const reset = document.getElementById('reset-button')
document.querySelector('ul').addEventListener('click', handleClick)


button.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = input.value
  if (input.value === '') {
    alert('Need to enter to-do!')
    return
  }
  input.value = ''
  ul.appendChild(li)
})

reset.addEventListener('click', function(evt) {
  ul.innerHTML = ''
  input.value = ''
})


function handleClick(evt) {
  evt.target.remove()
}