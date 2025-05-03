document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('randomButton');
    const displayArea = document.getElementById('displayArea');
    const dataFile = 'band_names.json'; // Path to your data file
    const existingLink = document.getElementById('myExistingLink');
    let items = []; // To store the fetched list items

    // Function to fetch the list items from the JSON file
    async function fetchListItems() {
        try {
            const response = await fetch(dataFile);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            items = await response.json();
        } catch (error) {
            console.error('Error fetching data:', error);
            displayArea.textContent = 'Failed to load list items.';
        }
    }

    // Call the fetch function when the page loads
    fetchListItems();
    displayArea.textContent = ` `;

    button.addEventListener('click', () => {
        if (items.length > 0) {
            const randomIndex = Math.floor(Math.random() * items.length);
            displayArea.textContent = `${items[randomIndex]}`;
            if (displayArea.textContent == "link to my album on youtube") {
                existingLink.href = 'https://youtu.be/O4NhcYQebY0';
                existingLink.textContent = 'Secret Album';
            } 
        } else {
            displayArea.textContent = "The list is empty or failed to load.";
        }
    });
});
