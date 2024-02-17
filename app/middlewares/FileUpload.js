const multer = require("multer")

exports.FileUploader = (req, res, next)=>{
    const storage = multer.diskStorage({
        destination:(req, res, cd)=>{
            cd(null, "../resources/Images")
        },
        filename:(req, res, cb)=>{
            cb(null, Date.now()+path.extname(file.originalname))
        }
    })


    // multer uploader

    const upload = multer({
        storage: storage,
        limits: {fileSize: 1024 * 10},
        fileFilter: (req, res, cb)=>{
            const fileTypes = /jpeg|jpg|webm|png|gif/
            const mimeType = fileTypes.test(file.mimetype)
            const extname = fileTypes.test(path.extname(file.originalname))

            if(mimeType && extname){
                return cb(null, true)
            }
            cb("Invalid file format, please upload a proper file")
        }
    }).single(image)

    next()
}