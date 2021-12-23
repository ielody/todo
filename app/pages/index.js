module.exports = async function($) {
  $.page.title = 'To-do-list'

  document.querySelector('#push').onclick = function() {
    if(document.querySelector('#newtask input').value.length == 0) {
      alert("Please enter a task")
  }

  else {
    document.querySelector('#tasks').innerHTML +=
    /* html*/`
      <div class="task">
        <span id="taskname">
          ${document.querySelector('#newtask input').value}
          </span>
          <button class="delete">
            <i class="far fa-trash-alt"></i>
          </button>
      </div>
    `
        var current_tasks = document.querySelectorAll(".delete")
        for(var i = 0; i < current_tasks.length; i++) {
          current_tasks[i].onclick = function() {
            this.parentNode.remove()
          }
        }
      }

return /* html */`

<div class='container'>
</div>

<h2>To-do list</h2>

<div id='newtask'>
  <input type='todo-text' placeholder='New task'>
     <button id='push'>Add</button>
</div>

<div id='tasks'>
</div>

 `
}
}
