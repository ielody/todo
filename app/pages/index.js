module.exports = async function($) {
  $.page.title = 'To-do-list'

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
