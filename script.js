// Change the text content of an element dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const textElement = document.getElementById('text');

changeTextBtn.addEventListener('click', function() {
    textElement.textContent = 'The text has been changed!';
});

// Modify the CSS styles via JavaScript
const changeStyleBtn = document.getElementById('changeStyleBtn');

changeStyleBtn.addEventListener('click', function() {
    textElement.style.color = 'blue'; // Changes the text color to blue
    textElement.style.fontSize = '20px'; // Changes the font size
    textElement.style.fontWeight = 'bold'; // Makes the text bold
});

// Add a new element when a button is clicked
const addElementBtn = document.getElementById('addElementBtn');
const newElementsContainer = document.getElementById('newElementsContainer');

addElementBtn.addEventListener('click', function() {
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is a dynamically added element.';
    newDiv.style.padding = '10px';
    newDiv.style.border = '1px solid black';
    newElementsContainer.appendChild(newDiv);
});

// Remove the last added element when a button is clicked
const removeElementBtn = document.getElementById('removeElementBtn');

removeElementBtn.addEventListener('click', function() {
    const lastElement = newElementsContainer.lastElementChild;
    if (lastElement) {
        newElementsContainer.removeChild(lastElement);
    }
});
