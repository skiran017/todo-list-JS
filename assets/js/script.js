const todoForm = document.getElementById("todo-form");
const inputField = document.getElementById("todo-inputbox");
const listGroup = document.querySelector(".list-group");
const todoListDiv = document.querySelector(".todo-list");
let userInput = null;

todoListDiv.addEventListener("click", function (event) {
  if (event.target.innerText === "Edit") {
    const itemToEdit = event.target.parentElement.parentElement;
    const newItem = prompt("userInput", itemToEdit.firstElementChild.innerText);
    itemToEdit.firstElementChild.innerText = newItem;
  } else if (event.target.innerText === "Delete") {
    event.target.parentElement.parentElement.remove();
  }
});
todoForm.addEventListener("submit", function (event) {
  event.preventDefault();
  if (!userInput) {
    alert("input field cannot be empty!");
  } else {
    const itemToAdd = `<li class="list-group-item list-item">
    <span class="item-name">${userInput}</span>
    <div class="modify-list">
    <button type="button" class="btn btn-outline-success editButton">
    Edit
  </button>
  <button type="button" class="btn btn-outline-danger deleteButton">
    Delete
  </button>
    </div>
  </li>`;
    listGroup.insertAdjacentHTML("afterbegin", itemToAdd);
  }
});
inputField.addEventListener("change", function (event) {
  userInput = event.target.value;
});
