import multer from "multer";


const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads");  // relative to your working directory
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname); // or use a timestamp for uniqueness
  },
});

const upload = multer({ storage });

export default upload;
