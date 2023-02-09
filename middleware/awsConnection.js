import { S3Client } from "@aws-sdk/client-s3";
import multer from "multer";
//import { s3 } from "../awsnodesamples/createBucket.js";
import multerS3 from "multer-s3";
import dotenv from "dotenv";
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, storageCB) => {
    storageCB(null, "uploads");
  },

  filename: (req, file, fileNameCB) => {
    console.log(file);
    fileNameCB(null, `${file.originalname}`);
  },
});
const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESSKEYID, // store it in .env file to keep it safe
    secretAccessKey: process.env.SECRETACCESSKEY,
  },
  region: "ap-south-1", // this is the region that you select in AWS account
});
//
const s3Storage = multerS3({
  s3: s3,
  bucket: "nodebuckett",
  acl: "public-read",
  metadata: (req, file, cb) => {
    cb(null, { fieldname: file.fieldname });
  },
  key: (req, file, cb) => {
    const fileName =
      Date.now() + "_" + file.fieldname + "_" + file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({ storage: s3Storage });

export { s3, upload };
