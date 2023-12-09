const { conn } = require('../config/conn');

const getItems = async () => {
    try {
        const [rows] = await conn.query(`SELECT p.product_id, p.sku, p.product_name, p.image_front, p.image_back, l.licence_name FROM product p JOIN licence l ON p.licence_id = l.licence_id`);
        //console.log(rows);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getItem = async (id) => {
    try {
        const [rows] = await conn.query();
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const createItem = async (data) => {
    try {
        const [rows] = await conn.query(`INSERT INTO product SET ?`, data);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const editItem = async (id) => {}

const deleteItem = async (id) => {
    try {
        const [rows] = await conn.query(`DELETE FROM product WHERE product_id = ?`, id);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
 getItems,
 getItem,
 createItem,
 editItem,
 deleteItem
}