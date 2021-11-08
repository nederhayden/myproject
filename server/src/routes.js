const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.post("/posts", multer(multerConfig).single("file"), async (req, res) => {
  const { originalname: name, size, filename: key } = req.file;
  const post = {
    name,
    size,
    key,
  };
  try {
    return res.json(post);
  } catch (error) {
    console.log(error);
  }
});

module.exports = routes;
