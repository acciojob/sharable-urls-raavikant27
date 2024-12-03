// your code here
// JavaScript for manipulating the URL
document.getElementById('button').addEventListener('click', function () {
    // Get values from the input fields
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Base URL
    let baseUrl = 'https://localhost:8080/';

    // Construct query string based on inputs
    let queryString = '';
    if (name) {
        queryString += `name=${encodeURIComponent(name)}`;
    }
    if (year) {
        queryString += (queryString ? '&' : '') + `year=${encodeURIComponent(year)}`;
    }

    // If there are parameters, append them to the base URL
    if (queryString) {
        baseUrl += '?' + queryString;
    }

    // Update the h3 element with the generated URL
    document.getElementById('url').textContent = baseUrl;
});
