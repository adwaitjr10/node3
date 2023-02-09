import AWS from "aws-sdk";
const ID = "AKIAWWFOKXZ23VVONMMX";
const SECRET = "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";

// The name of the bucket that you have created
const BUCKET_NAME = "nodebuckett";

const s3 = new AWS.S3({
  accessKeyId: ID,
  secretAccessKey: SECRET,
});
const params = {
  Bucket: BUCKET_NAME,
  CreateBucketConfiguration: {
    // Set your region here
    LocationConstraint: "ap-south-1",
  },
};
s3.createBucket(params, function (err, data) {
  if (err) console.log(err, err.stack);
  else console.log("Bucket Created Successfully", data.Location);
});
export { s3 };
