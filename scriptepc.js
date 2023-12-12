document.getElementById('calculate-cost').addEventListener('click', function(event) {
  event.preventDefault();

  var quantityEpc = parseFloat(document.getElementById('quantity-epc').value);
  var costEpc = parseFloat(document.getElementById('cost-epc').value);
  var quantityMtEpc = parseFloat(document.getElementById('quantity-mt-epc').value);

  if(isNaN(quantityEpc) || isNaN(costEpc) || isNaN(quantityMtEpc)) {
      alert('Please enter valid numbers for all fields');
      return;
  }

  var totalCost = (quantityEpc * costEpc) / quantityMtEpc;
  document.getElementById('resultepc').textContent = 'Estimated Project Cost: RM' + totalCost.toFixed(2);
});