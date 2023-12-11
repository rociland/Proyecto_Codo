const { conn } = require('../config/conn');

const getItems = async () => {
    try {
        const [rows] = await conn.query(`SELECT p.product_id, p.sku, p.price, p.dues, p.product_name, p.image_front, p.image_back, l.licence_name FROM product p JOIN licence l ON p.licence_id = l.licence_id`);
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
        const [rows] = await conn.query(`SELECT p.product_id, p.product_name, p.product_description, p.sku, p.dues, p.price, p.stock, p.discount, p.image_front, p.image_back, l.licence_name FROM product p INNER JOIN licence l ON p.licence_id = l.licence_id WHERE p.product_id = ?`, id);
        return rows[0];
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

const editItem = async (item, id) => {

    try {
        const [edit] = await conn.query(`UPDATE product SET ? WHERE product_id = ?`, [item, id]);
        return edit;
    } catch (error) {
        throw error;
    } finally {
        await conn.releaseConnection();
    }
}

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