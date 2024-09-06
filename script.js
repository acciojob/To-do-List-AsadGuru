//your code here

// Get references to the DOM elements
const newTodoInput = document.getElementById('newTodoInput');
const addTodoBtn = document.getElementById('addTodoBtn');
const todoList = document.getElementById('todoList');

// Function to add a new todo item
function addTodo() {
    const todoText = newTodoInput.value.trim(); // Get the input value and trim whitespace

    // Validate the input to ensure it is not empty
    if (todoText === '') {
        alert('Please enter a todo item.');
        return;
    }

    // Create a new list item
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = todoText;

    // Add a click event listener to the new item
    newTodoItem.addEventListener('click', function() {
        // When the item is clicked, clear the input field
        newTodoInput.value = '';
    });

    // Append the new item to the list
    todoList.appendChild(newTodoItem);

    // Clear the input field after adding the item
    newTodoInput.value = '';
}

// Attach an event listener to the button
addTodoBtn.addEventListener('click', addTodo);

// Optional: Allow pressing Enter to add a todo
newTodoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

