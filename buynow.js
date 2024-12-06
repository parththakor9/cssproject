// Fetch stored details from localStorage
const color = localStorage.getItem("selectedColor");
const quantity = localStorage.getItem("selectedQuantity");
const address = localStorage.getItem("selectedAddress");

const colorElement = document.getElementById("selected-color");
const quantityElement = document.getElementById("selected-quantity");
const totalPriceElement = document.getElementById("total-price");
const addressElement = document.getElementById("address");

colorElement.textContent = color;
quantityElement.textContent = quantity;

// Calculate total price (without shipping)
const unitPrice = 1199.99;
let total = unitPrice * quantity;
totalPriceElement.textContent = total.toFixed(2);

// Fill address in the form
addressElement.value = address;

// Shipping method selection
document.getElementById("shipping-method").addEventListener("change", calculateTotal);

// Function to calculate the total price based on the shipping method
function calculateTotal() {
    const shippingMethod = document.getElementById("shipping-method").value;
    let shippingCost = 0;

    if (shippingMethod === "standard") {
        shippingCost = 10.00;
    } else if (shippingMethod === "express") {
        shippingCost = 20.00;
    } else if (shippingMethod === "overnight") {
        shippingCost = 40.00;
    }

    total = unitPrice * quantity + shippingCost;
    totalPriceElement.textContent = total.toFixed(2);
}

// Place the order
function placeOrder() {
    alert(`Order placed successfully!\nShipping to: ${addressElement.value}`);
}
