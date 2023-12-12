const form = document.getElementById('manhours-form');
const resultDiv = document.getElementById('resultem');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const quantity = parseFloat(document.getElementById('quantity-em').value);
  const manhours = parseFloat(document.getElementById('manhours-em').value);
  const quantity2 = parseFloat(document.getElementById('quantity-em2').value);
  
  if(isNaN(quantity) || isNaN(manhours) || isNaN(quantity2)) {
    alert('Please enter valid numbers for all fields');
    return;
}

  const estimatedManhours = (quantity * manhours) / quantity2;

  resultDiv.innerHTML = `
  <p>Estimated Manhours: ${estimatedManhours}</p>
  `;
});


