const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

router.get('/', adminControllers.admin);
router.get('/create', adminControllers.createView);
router.post('/create', adminControllers.create);
router.get('/edit/:id', adminControllers.editView);
router.put('/edit/:id', adminControllers.edit);
router.delete('/delete/:id', adminControllers.delete);

module.exports = router;