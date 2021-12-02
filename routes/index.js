var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Express" });
});

/* GET nosotros page.*/

router.get("/nosotros", (req, res) => {
  res.render("pages/nosotros", { title: "Nosotros" });
});

/* GET Contacto page. */
router.get("/contacto", (req, res) => {
  res.render("pages/contacto", { title: "Contacto" });
});

module.exports = router;
