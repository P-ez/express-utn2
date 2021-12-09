//
const { Op } = require("sequelize");

// traer la DB
const db = require("../models");

// SELECT * FROM libro
// Esto es una función anónima de tipo arrow function guardada en una variable llamada getBooks... por lo tanto: es una función llamada getBooks
const getBooks = async () => {
  // Llamo a la DB
  const books = await db.libro
    .findAll({
      include: db.autor,
    })
    .then((result) => {
      return result;
    });

  return books;
};

const getAuthors = async () => {
  const authors = await db.autor.findAll().then(result => {
    return result;
  });
  return authors;
};

const getBookById = async (id) => {
  console.log("EL ID ES " + id);

  const book = await db.libro
    .findByPk(id, {
      include: db.autor,
    })
    .then((result) => {
      return result;
    });
  return book;
};

const searchByTitle = async (titulo) => {
  const results = await db.libro
    .findAll({
      where: {
        titulo: {
          [Op.substring]: titulo,
        },
      },
      include: db.autor,
    })
    .then((result) => {
      return result;
    });

  return results;
};
  const addBook = async (titulo, precio, portada, autorId) => {
    console.log("Llegó: ", titulo, precio, portada, autorId);
    
      const newBook = await db.libro.create({
        titulo,
        precio,
        portada,
        autorIdAutor: autorId
      });
      return newBook;
      }

// Exportamos las funciones
module.exports = { getBooks, getBookById, searchByTitle, getAuthors, addBook};
