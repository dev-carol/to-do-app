class Todo{
    constructor(){
        this.totalTasks = document.querySelectorAll('.task').length;
    }
    addTask(taskText){
       let template = document.querySelector('.task').cloneNode(true);
       template.classList.remove('hide');
       let templateText = template.querySelector('.task-title');
       templateText.textContent = taskText;

       let list = document.querySelector('#tasks-container');
       list.appendChild(template);

       this.addEvents();
       this.checkTasks('add');
        }

        removeTask(task){
            let parentEl = task.parentElement;
            parentEl.remove();
            this.checkTasks('remove');
        }
        completeTask(task){
            task.classList.add('done')
        }

        addEvents(){
            let removeButtons = document.querySelectorAll('.fa-trash');
            let removeButton = removeButtons[removeButtons.length -1];

            let doneButtons = document.querySelectorAll('.fa-check');
            let doneButton = doneButtons[doneButtons.length -1];


            removeButton.addEventListener('click', function(){
                todo.removeTask(this);
            });

            doneButton.addEventListener('click', function(){
                todo.completeTask(this);
            });
        }

        checkTasks(command){
            let mensagem = document.querySelector('#empty-tasks');

            if(command === 'add'){
                this.totalTasks += 1;
            }else if(command === 'remove'){
                this.totalTasks -= 1;
            }
            if(this.totalTasks ==1){
                mensagem.classList.remove('hide');
            }else{
                mensagem.classList.add('hide');
            }
        }
}

let todo = new Todo();

let addButton = document.querySelector('#add');

addButton.addEventListener('click', function(e){
    e.preventDefault();

    let taskText = document.querySelector('#task');
    console.log(taskText.value);

    if(taskText.value != ''){
        todo.addTask(taskText.value);

    }
    
    taskText.value = ''
})