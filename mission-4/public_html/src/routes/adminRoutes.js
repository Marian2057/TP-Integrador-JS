const express = require('express');
const router = express.Router();
const adminControllers = require ('../controllers/admin.Controller')

router.get('/admin', adminControllers.admin);
router.get('/admin/create', adminControllers.create);
router.post('/admin/create', adminControllers.create);
router.get('/admin/edit/:id', adminControllers.edit);
router.put('/admin/edit/:id', adminControllers.edit);
router.delete('/admin/delete/:id', adminControllers.delete);


module.exports = router;
