// /module.exports = async function($) {
//   $.page.title = 'About'

//   return /* html */`
//     <style>
//       main {
//         text-align: center;
//       }
//     </style>
//     <h1>About</h1>
//     <p>
//       Waveorb is everything you need to develop fast and future proof applications.
//     </p>
//     <p>
//       <a href="https://waveorb.com/about">
//         Read more about Waveorb here
//       </a>
//     </p>
//   `
// }
// document.querySelector('#push').onclick = function() {
//   if(document.querySelector('#newtask input').value.length == 0) {
//     alert("Please enter a task")
// }

// else {
//   document.querySelector('#tasks').innerHTML = function() {
//   /* html*/ `
//   <div class="task">
//       <span id="taskname">
//         ${document.querySelector('#newtask input').value}
//         </span>
//         <button class="delete">
//           <i class="far fa-trash-alt"></i>
//         </button>
//     </div>
//   `
//   }
// }
//       var current_tasks = document.querySelectorAll(".delete")
//       for(var i = 0; i < current_tasks.length; i++) {
//         current_tasks[i].onclick = function() {
//           parentNode.remove()
//         }
//       }
//     }