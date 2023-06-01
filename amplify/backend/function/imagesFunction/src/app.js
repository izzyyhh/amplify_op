/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_IMAGES_BUCKETNAME
Amplify Params - DO NOT EDIT */

const express = require("express");
const crypto = require("crypto");
const bodyParser = require("body-parser");
const awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: process.env.REGION,
});

/**
 * Creates a presigned URL for uploading an object to an S3 bucket.

 * @param {Object} options 
 * @param {string} options.bucket 
 * @param {string} [options.key]
 * @returns {Promise<string>}
 */

const createPresignedUrlWithClient = ({ bucket, key = "" }) => {
  const hash = crypto.createHash("sha256").digest("hex");
  key = key.concat(`_${hash}`);
  const command = new PutObjectCommand({ Bucket: bucket, Key: key });
  return getSignedUrl(s3Client, command, { expiresIn: 3600 });
};

const app = express();
app.use(bodyParser.json({ limit: "6mb" }));
app.use(awsServerlessExpressMiddleware.eventContext());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/images/health", function (req, res) {
  // Add your code here
  res.json({ success: "healthy!", url: req.url });
});

app.get("/images/surls/:count", async function (req, res) {
  const count = parseInt(req.params.count);

  if (isNaN(count)) {
    res.status(400).json({ msg: "Bad Request: count is not a number" });
    return;
  } else if (count < 1) {
    res.status(400).json({ msg: "Bad Request: count hast to be positive" });
    return;
  }

  const sUrlsPromises = [];

  for (let c = 0; c < count; c++) {
    const surl = createPresignedUrlWithClient({
      bucket: process.env.STORAGE_IMAGES_BUCKETNAME,
    });

    sUrlsPromises.push(surl);
  }

  const sUrls = await Promise.all(sUrlsPromises);

  res.json({
    msg: `successfully created ${count} presigned urls`,
    surls: sUrls,
  });
});

app.post("/images", async function (req, res) {
  /**
   * @typedef {Object} MyImage
   * @property {string} name
   * @property {string} type
   * @property {string} data
   *
   * data is encoded as base64
   */

  /**
   * @type {Array<MyImage>}
   */
  const images = req.body.images;

  await Promise.all(
    images.map(async (image) => {
      console.log("processing:", image.name);

      const buffer = Buffer.from(image.data, "base64");

      const putObjectCommand = new PutObjectCommand({
        Bucket: process.env.STORAGE_IMAGES_BUCKETNAME,
        Key: image.name,
        ContentType: image.type,
        Body: buffer,
      });

      try {
        const result = await s3Client.send(putObjectCommand);
        console.log("S3 result:", result);
      } catch (e) {
        console.log(e);
      }
    })
  );

  res.json({ success: "images uploaded!" });
});

app.delete("/images", function (req, res) {
  // Add your code here
  res.json({ success: "delete call succeed!", url: req.url });
});

app.listen(3000, function () {
  console.log("App started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
