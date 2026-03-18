let products = [
  { name: "Phone", category: "electronics", price: 500 },
  { name: "Shirt", category: "clothing", price: 30 },
  { name: "Laptop", category: "electronics", price: 1000 }
];

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `<p>${p.name} - $${p.price}</p>`;
  });
}

function filterProducts() {
  let value = document.getElementById("filter").value;
  let filtered = value === "all" ? products : products.filter(p => p.category === value);
  displayProducts(filtered);
}

function sortProducts(order) {
  let sorted = [...products];
  sorted.sort((a, b) => order === "low" ? a.price - b.price : b.price - a.price);
  displayProducts(sorted);
}

displayProducts(products);
