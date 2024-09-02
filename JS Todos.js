document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todo-input");
  const todoList = document.getElementById("todo-list");

  // Step 1: Add a new to-do item
  todoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTodoText = todoInput.value.trim();
    if (newTodoText !== "") {
      const newTodo = document.createElement("li");
      newTodo.textContent = newTodoText;

      // Step 2: Add a button to remove the to-do item
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        newTodo.remove();
      });

      newTodo.appendChild(removeButton);
      todoList.appendChild(newTodo);
      todoInput.value = "";
    }
  });
});

// Answer to question in a comment
// This script initializes a simple to-do list application. When a new task is submitted through the form, it adds the task to the list with a remove button. The remove button allows users to delete the task from the list.
