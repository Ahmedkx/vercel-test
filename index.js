const express = require("express");
const app = express();

app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
    res.json({ message: "Hello from Express API deployed on Vercel!" });
});

// A sample dynamic route
app.get("/api/greet/:name", (req, res) => {
    res.json({ message: `Hello, ${req.params.name}!` });
});

// Listen on a dynamic port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = app; // Export for Vercel
