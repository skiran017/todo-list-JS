var todoForm = document.getElementById("todo-form");
var inputField = document.getElementById("todo-inputbox");
var listGroup = document.querySelector(".list-group");
var todoListDiv = document.querySelector(".todo-list");
var userInput = null;
function handleClick(event) {
    if (event.target.innerText === "Edit") {
        var itemToEdit = event.target.parentElement.parentElement;
        var newItem = prompt("userInput", itemToEdit.firstElementChild.innerText);
        itemToEdit.firstElementChild.innerText = newItem;
    }
    else if (event.target.innerText === "Delete") {
        event.target.parentElement.parentElement.remove();
    }
}
todoListDiv.addEventListener("click", handleClick);
function handleSubmit(event) {
    event.preventDefault();
    if (!userInput) {
        alert("input field cannot be empty!");
    }
    else {
        var itemToAdd = "<li class=\"list-group-item list-item\">\n    <span class=\"item-name\">".concat(userInput, "</span>\n    <div class=\"modify-list\">\n    <button type=\"button\" class=\"btn btn-outline-success editButton\">\n    Edit\n  </button>\n  <button type=\"button\" class=\"btn btn-outline-danger deleteButton\">\n    Delete\n  </button>\n    </div>\n  </li>");
        listGroup.insertAdjacentHTML("afterbegin", itemToAdd);
    }
}
todoForm.addEventListener("submit", handleSubmit);
function handleChange(event) {
    userInput = event.target.value;
}
inputField.addEventListener("change", handleChange);
