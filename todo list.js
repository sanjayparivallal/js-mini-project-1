let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodo();


function renderTodo() {
    let todoListHtml = ``;
/*
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const { name, due } = todoObject;
        const html = `<div>${name}</div>
        <div>${due}</div>
        <button onclick="deleteTodo(${i});"class="detetebutton">Delete</button>`;
        todoListHtml += html
    }*/


    todoList.forEach( (todoObject,index) => {
        const { name, due } = todoObject;
        const html = `<div>${name}</div>
        <div>${due}</div>
        <button onclick="deleteTodo(${index});"class="detetebutton">Delete</button>`;
        todoListHtml += html
        
    });
    document.querySelector(".js-todo-list").innerHTML = todoListHtml;


}

function addTodo() {
    const name = document.querySelector(".js-name-input").value;
    const due = document.querySelector(".js-due-date-input").value;


    todoList.push({
        name,
        due
    });
    updatelocalStorage()
}
function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodo();
    updatelocalstorage();

}
updatelocalStorage();
function updatelocalStorage() {

    localStorage.setItem('todoList', JSON.stringify(todoList));

    document.querySelector(".js-name-input").value = "";
    renderTodo();
}

function buttonpress(a) {
    if (a === "Enter") {
        addTodo();
    }
}
