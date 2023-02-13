const express = require('express');
const router = express.Router()
const fileUpload = require('express-fileupload')


const {uploadFile} = require('../controllers/files.js')

router.route('/upload').post(fileUpload({ createParentPath: true }), uploadFile)

module.exports = router;