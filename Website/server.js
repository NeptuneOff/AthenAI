// server.js (CommonJS)
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Dossier statique
app.use(express.static(path.join(__dirname, "public")));

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "pages", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur http://localhost:${PORT}`);
});
