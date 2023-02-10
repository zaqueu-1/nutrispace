const router = require('express').Router();

const patientController = require('../controllers/patientController');

router
    .route('/patient')
    .post((req, res) => patientController.create(req, res));

router
    .route('/patient')
    .get((req,res) => patientController.getAll(req,res))

router
    .route('/patient/:id')
    .get((req,res) => patientController.get(req,res))

router
    .route('/patient/:id')
    .delete((req,res) => patientController.delete(req,res))

router
    .route('/patient/:id')
    .put((req,res) => patientController.update(req,res))

module.exports = router;