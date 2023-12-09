const { createUser, validateUser, getUserByEmail } = require('../models/user.model');

const authControllers = {

    login: (req, res) => res.render('../views/auth/login'),
    loginUser: async (req, res) => {
        try {

            const email = req.body.email;
            const password = req.body.password;
            const user = await validateUser(email, password);

            if (user) {
                res.redirect('/admin');
            } else {
                res.send('Usuario no encontrado. <a href="/auth/login">Volver</a>');
            }
        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            res.status(500).send('Error al obtener el usuario');
        }
    },
    register: (req, res) => res.render('../views/auth/register'),
    registerUser: async (req, res) => {
        try {
            const data = {
                name: req.body.name,
                lastname: req.body.lastname,
                email: req.body.email,
                password: req.body.password
            }
            const user = await createUser(data);
            res.redirect('/admin');
        } catch (error) {
            console.error('Error al crear el usuario:', error);
            res.status(500).send('El email ya está registrado. Por favor ingrese otro email. <a href="/auth/register">Volver</a>');
        }
    },
    logout: (req, res) => res.send('Route for logging out')
}

module.exports = authControllers;