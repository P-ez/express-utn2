var express = require("express");
var router = express.Router();

// Traigo TODAS las funciones de la API
const api = require("../api");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/* GET /resultados age */
router.get('/resultados', async (req,res)=>{
  /*console.log(req.query);
  res.send('Vas bien');*/
  const {titulo}=req.query;

  const results = await api.searchByTitle(titulo);
  res.send(results);
  });

/* GET nosotros page */
router.get("/nosotros", (req, res) => {
  res.render("pages/nosotros", { title: "Nosotros" });
});

/* GET contacto page */
router.get("/contacto", (req, res) => {
  res.render("pages/contacto", { title: "Contacto" });
});

// localhost:3000/libros
router.get("/libros", async (req, res) => {
  // Llamar a la función getBooks
  const books = await api.getBooks();

  // Devolver el JSON con los libros recibidos
  res.render('pages/libros',{books});
});

router.get("/libro/:id", async (req, res) => {
  const book = await api.getBookById(req.params.id);
  
  res.render('pages/libro',{book});
});





module.exports = router;
