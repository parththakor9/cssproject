let cartCount = 0;

// Function to handle image change when clicking on thumbnails
function changeImage(element) {
    const mainImage = document.getElementById("main-image");
    mainImage.src = element.src;
}

// Function to handle color change when a new color is selected
function changeProductColor() {
    const selectedColor = document.getElementById("color").value;
    const mainImage = document.getElementById("main-image");

    // Update image based on selected color
    if (selectedColor === 'black') {
        mainImage.src = 'img/24u1.jpg';
    } else if (selectedColor === 'white') {
        mainImage.src = 'img/24uw1.jpg';
    } 
}
function changeProductColor1() {
    const selectedColor = document.getElementById("color").value;
    const mainImage = document.getElementById("main-image");

    // Update image based on selected color
    if (selectedColor === 'black') {
        mainImage.src = 'img/32b1.webp';
    } else if (selectedColor === 'white') {
        mainImage.src = 'img/32w.jpeg';
    } 
}

function changeProductColor2() {
    const selectedColor = document.getElementById("color").value;
    const mainImage = document.getElementById("main-image");

    // Update image based on selected color
    if (selectedColor === 'black') {
        mainImage.src = 'img/32b1.webp';
    } else if (selectedColor === 'white') {
        mainImage.src = 'img/32w.jpeg';
    } 
}
function changeProductColor3() {
    const selectedColor = document.getElementById("color").value;
    const mainImage = document.getElementById("main-image");

    // Update image based on selected color
    if (selectedColor === 'black') {
        mainImage.src = 'img/samsungbud1.jpg';
    } else if (selectedColor === 'white') {
        mainImage.src = 'img/bud1w.jpg';
    } 
}

function changeProductColor4() {
    const selectedColor = document.getElementById("color").value;
    const mainImage = document.getElementById("main-image");

    // Update image based on selected color
    if (selectedColor === 'black') {
        mainImage.src = 'img/samsungbud2.jpg';
    } else if (selectedColor === 'white') {
        mainImage.src = 'img/bud2w.jpg';
    } 
}

function changeProductColor5() {
    const selectedColor = document.getElementById("color").value;
    const mainImage = document.getElementById("main-image");

    // Update image based on selected color
    if (selectedColor === 'black') {
        mainImage.src = 'img/samsungbud3.jpg';
    } else if (selectedColor === 'white') {
        mainImage.src = 'img/bud2w.jpg';
    } 
}

// Function to handle adding product to cart
function addToCart() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const address = document.getElementById("address").value;
    const color = document.getElementById("color").value;

    if (!address) {
        alert("Please enter your shipping address.");
        return;
    }

    // Update the cart count
    cartCount += quantity;
    document.getElementById("cart-count").textContent = cartCount;

    // Save the cart details to localStorage
    localStorage.setItem("selectedColor", color);
    localStorage.setItem("selectedQuantity", quantity);
    localStorage.setItem("selectedAddress", address);

    alert(`Added ${quantity} Samsung Galaxy S24 Ultra to your cart.\nShipping to: ${address}`);
}

// Save to localStorage for Buy Now page
function saveToLocalStorage() {
    const color = document.getElementById("color").value;
    const quantity = parseInt(document.getElementById("quantity").value);
    const address = document.getElementById("address").value;

    // Save the details to localStorage
    localStorage.setItem("selectedColor", color);
    localStorage.setItem("selectedQuantity", quantity);
    localStorage.setItem("selectedAddress", address);
}
