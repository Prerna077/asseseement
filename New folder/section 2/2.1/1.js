const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "Smartwatch", description: "A fitness tracking smartwatch", price: 199.99, imageUrl: "https://example.com/smartwatch.jpg" },
  { id: 2, name: "Wireless Earbuds", description: "Noise-canceling wireless earbuds", price: 129.99, imageUrl: "https://example.com/earbuds.jpg" }
];

// Get all products
app.get("/products", (req, res) => res.json(products));

// Get a product by ID
app.get("/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  product ? res.json(product) : res.status(404).json({ error: "Product not found" });
});

// Create a new product
app.post("/products", (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  if (!name || !description || !price || !imageUrl) return res.status(400).json({ error: "All fields are required" });

  const newProduct = { id: products.length + 1, name, description, price: parseFloat(price), imageUrl };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update an existing product
app.put("/products/:id", (req, res) => {
  const product = products.find(p => p.id === Number(req.params.id));
  if (!product) return res.status(404).json({ error: "Product not found" });

  const { name, description, price, imageUrl } = req.body;
  if (!name || !description || !price || !imageUrl) return res.status(400).json({ error: "All fields are required" });

  Object.assign(product, { name, description, price: parseFloat(price), imageUrl });
  res.json(product);
});

// Delete a product
app.delete("/products/:id", (req, res) => {
  const index = products.findIndex(p => p.id === Number(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  const [deletedProduct] = products.splice(index, 1);
  res.json({ message: "Product deleted", product: deletedProduct });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
