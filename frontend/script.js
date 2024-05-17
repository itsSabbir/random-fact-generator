document.getElementById('generate-fact').addEventListener('click', function() {
    fetch('/facts')  // Assuming the backend endpoint to get a random fact is '/facts'
        .then(response => {
            if (response.ok) {
                return response.json();  // Parse the JSON from the response
            }
            throw new Error('Network response was not ok.');  // Handle server errors
        })
        .then(data => {
            displayFact(data);  // Function to handle the display of data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            document.getElementById('fact-container').innerText = 'Failed to load fact. Please try again!';
        });
});

function displayFact(factData) {
    const container = document.getElementById('fact-container');
    if (factData && factData.text) {
        // Display the fact text
        container.innerText = factData.text;
    } else {
        // Handle case where fact is undefined or missing 'text' property
        container.innerText = 'No fact available.';
    }
}
