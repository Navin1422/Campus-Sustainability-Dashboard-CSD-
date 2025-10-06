// server/local-static-server.js
const express = require("express");
const path = require("path");
const app = express();
const distPath = path.resolve(__dirname, "..", "client", "dist");

app.use(express.static(distPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = Number(process.env.PORT || 5000);
app.listen(port, () => {
  console.log(`Serving static files from ${distPath} on port ${port}`);
});
