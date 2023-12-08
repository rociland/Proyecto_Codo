const authControllers = {

    login: (req, res) => res.render('../views/auth/login'),
    loginUser: (req, res) => res.send('Route for validating login data'),
    register: (req, res) => res.render('../views/auth/register'),
    registerUser: (req, res) => res.send('Route for creating new register'),
    logout: (req, res) => res.send('Route for logging out')
}

module.exports = authControllers;