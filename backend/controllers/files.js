const path = require('path');
const crypto = require("crypto");
const {asyncAuthWrapper} = require('../middleware/asyncjs')
const jwt = require('jsonwebtoken');


const uploadFile = asyncAuthWrapper( async (req, res, next, token) => {
    console.log('les go')
    const files = req.files
    const { id: userId } = jwt.decode(token);
    let newFileName = '';
    // console.log(Object.keys(files));
    // console.log(userId);
    

      
    Object.keys(files).forEach(key => {
        // console.log(files[key].size);
        // console.log(files[key]);
        let cryptoGen = crypto.randomBytes(16).toString("hex");
        const tempFile = files[key].name;
        const fileFormat = tempFile.toString().split('.')[1];
        
        // combine to new image name
         newFileName = cryptoGen + '.' + fileFormat;

        const filePath = path.join(__dirname, "..", "files", userId , newFileName)
        // console.log(filePath);
        files[key].mv(filePath, (err) => {
            if (err)
                return res.status(400).json({msg: err})
        })
    })

    return res.status(200).json({msg: "Upload files  complete!", files: files, fileName: newFileName, user_id: userId})
    
    
})

module.exports = {uploadFile}