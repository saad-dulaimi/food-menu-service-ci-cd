const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "v1.0";

// Sample menu data (no database)
const menu = [
  { id: 1, name: "poutine Pizza", price: 15 },
  { id: 2, name: "Mushroom Swiss Burger", price: 9 },
  { id: 3, name: "Pasta Alfredo", price: 18 },
  { id: 4, name: "French Fries", price: 7 }
];

// Serve static frontend
app.use(express.static(path.join(__dirname, "public")));

// API: Get menu
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

// API: Health check (for ALB)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

// API: Version check (for CI/CD validation)
app.get("/version", (req, res) => {
  res.json({
    version: APP_VERSION
  });
});

app.listen(PORT, () => {
  console.log(`Food Menu Service running on port ${PORT}`);
});
