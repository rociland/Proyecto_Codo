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

const editItem = async (id) => {
    try {
        const [rows] = await conn.query(`UPDATE FROM product WHERE product_id = ?`, id);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}


const getallItemsLicences = async (id) => {
    try {
        const [licence] = await Lawait conn.query(`SELECT from WHERE product_id = ?`, licence_id );
        console.log(licence);
        return licence;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

module.exports = {
 getItems,
 getallItemsLicences,
 getItem,
 createItem,
 editItem,
 deleteItem
}