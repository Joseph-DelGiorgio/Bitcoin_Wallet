// script.js

// fetch the user's bitcoin address and balance from the server
fetch("http://localhost:5000/api/wallet")
  .then(response => response.json())
  .then(data => {
    // update the UI with the address and balance
    document.getElementById("address").innerText = data.address;
    document.getElementById("balance").innerText = data.balance;
  });

// handle the form submission to send bitcoin
document.querySelector("form")
