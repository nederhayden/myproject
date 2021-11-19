const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");
const fs = require("fs");
const crypto = require("crypto");

const categories = require("./db/categories.json");
const genders = require("./db/genders.json");
const occupations = require("./db/occupations.json");
const states = require("./db/states.json");

routes.get("/profiles", (req, res) => {
  res.json(profiles);
});

routes.get("/categories", (req, res) => {
  res.json(categories);
});

routes.get("/genders", (req, res) => {
  res.json(genders);
});

routes.get("/occupations", (req, res) => {
  res.json(occupations);
});

routes.get("/states", (req, res) => {
  res.json(states);
});

const jsonProfiles = fs.readFileSync("src/db/profiles.json", "utf8");
let profiles = JSON.parse(jsonProfiles);

/*=================== CRIA UM NOVO PERFIL ===================*/
routes.post("/profiles", (req, res) => {
  const { name, age, city, state, occupation, category, gender } = req.body;

  const newProfile = {
    id: crypto.randomBytes(16).toString("hex"),
    name,
    age,
    city,
    state,
    occupation,
    category,
    gender,
  };

  profiles.push(newProfile);
  let newData = JSON.stringify(profiles, null, 2);
  fs.writeFileSync("src/db/profiles.json", newData);

  return res.status(201).json(newProfile);
});

/*=================== UPLOAD DA IMAGEM ===================*/
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

/*=================== DELETAR PERFIL ===================*/
routes.delete("/profiles/:id", (req, res) => {
  const { id } = req.params;
  profiles = profiles.filter((profile) => profile.id != id);
  const jsonProfile = JSON.stringify(profiles);
  fs.writeFileSync("src/db/profiles.json", jsonProfile, "utf-8");
  return res.send("perfil deletado");
});

module.exports = routes;
