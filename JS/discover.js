document.addEventListener('DOMContentLoaded', function() {
    // Get the value from the query parameter in the URL
    const params = new URLSearchParams(window.location.search);
    const discoveredValue = params.get('value');

    // Update the content of the paragraph with the discovered value
    const discoveredValueParagraph = document.querySelector('.discoveredValue');
    discoveredValueParagraph.textContent = discoveredValue;
});