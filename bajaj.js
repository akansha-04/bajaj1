// Sample dynamic data (this would be fetched or updated dynamically in a real scenario)
let data = ["a", "b", "c", "1", "2", "3"];

// Function to filter numbers from the data
function filterNumbers() {
    return data.filter(item => !isNaN(item));
}

// Function to filter alphabets from the data
function filterAlphabets() {
    return data.filter(item => isNaN(item));
}

// Handle form submission
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const filterValue = document.getElementById('filter').value;
    let result;

    if (filterValue === 'numbers') {
        result = filterNumbers();
        document.getElementById('result').innerText = `Filter response Numbers: ${result.join(', ')}`;
    } else if (filterValue === 'alphabets') {
        result = filterAlphabets();
        document.getElementById('result').innerText = `Filter response Alphabets: ${result.join(', ')}`;
    }
});

// Example of dynamically updating the data
function updateData(newData) {
    data = newData;
}

// You can call this function with new data whenever you need to update the dataset
// updateData(["x", "y", "z", "7", "8", "9"]);
