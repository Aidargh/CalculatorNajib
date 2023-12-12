document.getElementById('norm-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   
    var discQ = parseFloat(document.getElementById('DiscQ').value);
    var discMhrs = parseFloat(document.getElementById('DiscMhrs').value);
    var discQ8 = parseFloat(document.getElementById('DiscQ8').value);
    var discMhrs8 = parseFloat(document.getElementById('DiscMhrs8').value);
   
    // Check if the user entered a value for either input field
    if (isNaN(discQ) || isNaN(discMhrs) || isNaN(discQ8) || isNaN(discMhrs8)) {
       alert('Please enter a valid number for all inputs.');
       return;
    }
   
    // Calculate norm
    var norm = discQ / discMhrs;
    var norm8 = (discQ8 * 8) / discMhrs8;
    
    // Display the result
    document.getElementById('resultnorm').innerHTML = 'Norm: ' + norm.toFixed(2) + ' (Commodity/hour)<br>Norm per Day: ' + norm8.toFixed(2) + ' (Commodity/hour)';
});