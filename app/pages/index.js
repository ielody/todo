module.exports = async function($) {
  $.page.title = 'To-do-list'

  return /* html */`

  <div class='container'>

  </div>

  <h2>Try my To-do list</h2>

  <div id='newtask'>
  <input type='text' placeholder='Task to be done'>
  <button id='push'>Add task</button>
  </div>

  `
}
