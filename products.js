const products = [
  { name: "Phone", category: "Electronics", price: 45000 },
  { name: "T-Shirt", category: "Clothing", price: 700 },
  { name: "Laptop", category: "Electronics", price: 85000 },
  { name: "Jeans", category: "Clothing", price: 1500 }
];

let filteredProducts = [...products];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";
  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${p.name}</strong><br>Category: ${p.category}<br>Price: ₹${p.price}`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const category = document.getElementById("filterCategory").value;
  filteredProducts = category === "All" ? [...products] : products.filter(p => p.category === category);
  sortProducts();
}

function sortProducts() {
  const order = document.getElementById("sortPrice").value;
  filteredProducts.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
  displayProducts(filteredProducts);
}

displayProducts(products);