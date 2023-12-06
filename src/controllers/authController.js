const authControllers = {

    login: (req, res) => res.send('Route for login view'),
    loginUser: (req, res) => res.send('Route for validating login data'),
    register: (req, res) => res.send('Route for register view'),
    registerUser: (req, res) => res.send('Route for creating new register'),
    logout: (req, res) => res.send('Route for logging out')
}

module.exports = authControllers;