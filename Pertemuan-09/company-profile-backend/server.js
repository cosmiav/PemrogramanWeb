const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/profile", (req, res) => {
  res.json({
    name: "PT GIT Solution",
    description: "Solusi Teknologi Terbaik untuk Bisnis Anda",
    services: ["Pengembangan Software", "Konsultasi IT", "Manajemen Proyek"],
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
