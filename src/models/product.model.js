const { conn } = require('../config/conn');

// funcion para traer todos los items

const getItems = async () => {
 try {
 const [rows] = await conn.query('SELECT * FROM product;');
 console.log(rows);
 return rows;
 } catch (error) {
 throw error;
 } finally {
 conn.releaseConnection();
 }
}

module.exports = {
 getItems
}

// funcion para traer un solo item
// funcion para crear un item
// funcion para editar un item
// funcion para eliminar un item