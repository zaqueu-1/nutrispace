const router = require('express').Router();

const patientRouter = require('./patient')

router.use('/', patientRouter)

module.exports = router;