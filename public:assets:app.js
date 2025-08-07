const GAS_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";

async function submitOrder(orderData) {
  const response = await fetch(GAS_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(orderData)
  });
  return await response.json();
}