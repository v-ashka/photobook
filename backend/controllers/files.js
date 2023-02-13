const path = require('path');
const {asyncAuthWrapper} = require('../middleware/asyncjs')



const uploadFile = asyncAuthWrapper( async (req, res, next, token) => {
    console.log('les go')
    const files = req.files
    // console.log(files);
    console.log(token);
    
    Object.keys(files).forEach(key => {
        console.log(files[key].size);
        const filePath = path.join(__dirname, "..", "files", files[key].name)
        console.log(filePath);
        files[key].mv(filePath, (err) => {
            if (err)
                return res.status(400).json({msg: err})
        })
    })

    return res.status(200).json({msg: "Upload files  complete!", files: files})
    
    
})

module.exports = {uploadFile}