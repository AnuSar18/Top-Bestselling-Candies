// Class for managing candy data
class Candy {
    constructor(name, date) {
        this.name = name;
        this.date = new Date(date);
    }

    getFormattedDate() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return this.date.toLocaleDateString(undefined, options);
    }
}

// Array to store candies
const candies = [
    new Candy('Snickers', '2024-08-01'),
    new Candy('M&M\'s', '2024-07-20'),
    new Candy('KitKat', '2024-06-15')
];

// Function to display candies
function displayCandies() {
    const candiesList = document.getElementById('candies');
    candiesList.innerHTML = '';

    candies.forEach(candy => {
        const listItem = document.createElement('li');

        // Create the candy name element
        const candyName = document.createElement('div');
        candyName.textContent = candy.name;
        candyName.style.fontWeight = 'bold';

        // Create the candy date element
        const candyDate = document.createElement('div');
        candyDate.textContent = `Added on ${candy.getFormattedDate()}`;
        candyDate.style.fontStyle = 'italic';

        // Append the name and date to the list item
        listItem.appendChild(candyName);
        listItem.appendChild(candyDate);
        
        // Add the list item to the candies list
        candiesList.appendChild(listItem);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const dateInput = document.getElementById('date');

    // Validate inputs
    if (nameInput.value.trim() === '') {
        alert('Please enter a candy name.');
        return;
    }

    if (!dateInput.value) {
        alert('Please select a date.');
        return;
    }

    try {
        // Add new candy
        const newCandy = new Candy(nameInput.value, dateInput.value);
        candies.push(newCandy);
        displayCandies();

        // Clear form inputs
        nameInput.value = '';
        dateInput.value = '';
    } catch (error) {
        console.error('Error adding candy:', error);
        alert('Failed to add candy. Please try again.');
    }
}

// Event listeners
document.getElementById('candy-form').addEventListener('submit', handleFormSubmit);

// Initial display
displayCandies();
