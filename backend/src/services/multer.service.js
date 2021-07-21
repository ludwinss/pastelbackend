import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: path.join(__dirname,'../','public/uploads'),
  filename: function (req, file, cb) {
    let imgName=`${ file.fieldname } - ${ Date.now() }`;
    req.pathImg='/uploads/'+imgName;
    cb(null, imgName)
  }
})
 
const upload = multer({ storage: storage })

export default upload;

