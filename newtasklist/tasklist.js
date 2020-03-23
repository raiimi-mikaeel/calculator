const form = document.querySelector('#task-form');
const tasklist = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners(){
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    tasklist.addEventListener('click', removeTask);
    // clear task event
    clearBtn.addEventListener('click', clearTasks);
}

// add task
function addTask (e) {
    if (taskInput.value === '') {
        alert('please enter text');
        
    }
    // create li element
    const li = document.createElement('li');
    // add class
    li.className ="collection-item";
    // create a textNode and append it to li
    li.appendChild(document.createTextNode(taskInput.value));
   //create new link element
   const link = document.createElement('a')
   // add class
   link.className = "delete-item secondary-content";
   // add icon html
   link.innerHTML = '<i class="fa fa-remove"></i>'
   // append the link to the li
   li.appendChild(link)
   // append the li to the ul
   tasklist.appendChild(li);
   //clear input
   taskInput.value = "";



    e.preventDefault();
    
}
 
// remove Task
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('are tou sure')) {
            
        }
      e.target.parentElement.parentElement.remove();
        
    }
    
}
// clear Task
function clearTasks(){
   while (tasklist.firstChild) {
       tasklist.removeChild(tasklist.firstChild);
       
   }
}