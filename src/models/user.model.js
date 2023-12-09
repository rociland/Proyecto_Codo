const { conn } = require('../config/conn');

const createUser = async (data) => {

    const existingUser = await getUserByEmail(data.email);

    if (existingUser) {
        throw new Error('El email ya está registrado. Por favor ingrese otro email.');
    }

    try {
        const [rows] = await conn.query(`INSERT INTO user SET ?`, data);
        return rows;
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const validateUser = async (email, password) => {
    try {
        const [rows] = await conn.query(`SELECT * FROM user WHERE email = ? AND password = ?`, [email, password]);
        return rows[0];
    } catch (error) {
        throw error;
    } finally {
        conn.releaseConnection();
    }
}

const getUserByEmail = async (email) => {
    try {
      const [rows] = await conn.query(`SELECT * FROM user WHERE email = ?`, email);
      return rows[0];
    } catch (error) {
      throw error;
    }
}

module.exports = {
    createUser,
    validateUser,
    getUserByEmail
}