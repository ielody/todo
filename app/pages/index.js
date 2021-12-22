module.exports = async function($) {
  $.page.title = 'To-do-list'

return /* html */`
<style>

*,
*:before,
*:after{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
  background: lightblue;
}

.container {
  width: 40%;
  top: 50%;
  left: 50%;
  background: lightseagreen;
  border-radius: 10px;
  min-width: 450px;
  position: absolute;
  min-height: 100px;
  transform: translate(-50%,-50%);
}

#newtask {
  position: relative;
  padding: 30px 20px;
}

#newtask input {
  width: 75%;
  height: 45px;
  padding: 12px;
  background-color: lightyellow;
  color: black;
  position: relative;
  font-family: 'Courier New', Courier, monospace;
  font-size: 18px;
  border: 5px solid cadetblue
}

#newtask input:focus {
  outline: none;
  border-color: cornflowerblue;
}

#newtask button {
  position: relative;
  float: right;
  font-weight: 500;
  font-size: 16px;
  background-color: crimson;
  color: aqua;
  border: none;
  cursor: pointer;
  outline: none;
  width:  20%;
  height: 45px;
  border-radius: 5px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}



</style>


<!--HOVEDDEL HTML-->

<div class='container'>

  </div>

  <h2>To-do list</h2>

  <div id='newtask'>
  <input type='todo-text' placeholder='New task'>
  <button id='push'>Add</button>
  </div>

  `
}
