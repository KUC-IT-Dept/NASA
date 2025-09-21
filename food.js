let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById('cart-list');
  const cartTotal = document.getElementById('cart-total');
  cartList.innerHTML = '';
  cart.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = entry.item + ' - ₹' + entry.price;
    cartList.appendChild(li);
  });
  cartTotal.textContent = "₹" + total;
}

function checkout() {
  if (cart.length === 0) {
    alert('🚫 Your cart is empty!');
  } else {
    // Replace this with YOUR actual UPI ID
    const upiID = "yourupiid@oksbi";  
    const payeeName = "SpaceFood Market";
    const amount = total;  
    const currency = "INR";

    // Create UPI payment link
    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=${currency}`;

    // Redirect to UPI app (Google Pay / PhonePe / Paytm)
    window.location.href = upiLink;

    // Clear cart after checkout
    cart = [];
    total = 0;
    renderCart();
  }
}
