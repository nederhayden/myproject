const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.get("/posts", async (req, res) => {
  try {
    res.json(req.file);
  } catch (error) {
    console.log(error);
  }
});

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  try {
    res.json("Feito o upload da imagem");
  } catch (error) {
    console.log(error);
  }
});

routes.delete("/posts/:id", async (req, res) => {
  return res.send();
});

module.exports = routes;
