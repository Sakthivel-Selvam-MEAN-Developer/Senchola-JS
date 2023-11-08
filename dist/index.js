const addTask = () => {
    if(document.querySelector('#todo-input').value.length == 0)
        alert("Kindly Enter Task Name!!!!")
    else {
        let task = document.createElement('div');
        task.classList.add('task', 'p-3', 'mt-2', 'mb-2', 'text-white', 'd-flex', 'justify-content-between', 'align-items-center')
        task.innerHTML += 
               `<span id="taskname" class="me-3">
                    ${document.getElementById('todo-input').value}
                </span>
                <a href="#" class="delete">
                    <img src="./delete-filled-svgrepo-com.svg" alt="delete" width="20">
                </a>`;
        document.getElementById('tasks').appendChild(task);


        var current_tasks = document.querySelectorAll(".delete");
        
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}




const showAndHidePassword = (event) => {
    let id = event.target.id;

    if (id == 'show-and-hide')
        changePasswordType(id, 'password');
    else if (id == 'confirm-show-and-hide')
        changePasswordType(id, 'confirm-password')
}

const changePasswordType = (imgId, inputId) => {
    let hide_src = './eye-slash-alt-svgrepo-com.svg';
    let show_src = './eye-alt-svgrepo-com.svg';

    if (document.getElementById(inputId).value != '') {
        if (document.getElementById(inputId).type == 'password') {
            document.getElementById(inputId).type = 'text';
            document.getElementById(imgId).src = hide_src;
        } else {
            document.getElementById(inputId).type = 'password';
            document.getElementById(imgId).src = show_src;
        }
    }
}

