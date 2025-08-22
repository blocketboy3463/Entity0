let balances = {
  alex: 4000,
  jayren: 4000
};

function login() {
  const password = document.getElementById("admin-password").value;
  const message = document.getElementById("login-message");
  
  if (password === "admin") {
    document.getElementById("admin-login").style.display = "none";
    document.getElementById("admin-panel").style.display = "block";
  } else {
    message.textContent = "Incorrect password!";
    message.style.color = "red";
  }
}

function updateBalances() {
  document.getElementById("alex-balance").textContent = balances.alex;
  document.getElementById("jayren-balance").textContent = balances.jayren;
}

function addMoney() {
  const student = document.getElementById("student-select").value;
  const amount = parseInt(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    balances[student] += amount;
    updateBalances();
  }
}

function removeMoney() {
  const student = document.getElementById("student-select").value;
  const amount = parseInt(document.getElementById("amount").value);
  if (!isNaN(amount) && amount > 0) {
    balances[student] -= amount;
    updateBalances();
  }
}

// Initialize balances on load
updateBalances();
