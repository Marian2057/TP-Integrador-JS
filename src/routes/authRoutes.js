const express = require('express');
const router = express.Router();
const authControllers = require ('../controllers/auth.Controller')

router.get('/admin/login', authControllers.login);
router.post('/admin/login', authControllers.login);
router.get('/admin/register', authControllers.register);
router.post('/admin/register', authControllers.register);

module.exports = router;
