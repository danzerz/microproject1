const express = require("express");
const app = express();
const PORT = 3000;
const items = require("./data/items.json");

app.use(express.static("public"));

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
