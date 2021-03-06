const multer = require("multer");
const path = require("path");
//Used to upload files
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".mp3" && ext !== ".wav") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
