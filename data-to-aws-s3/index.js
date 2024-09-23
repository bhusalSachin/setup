import AWS from "aws-sdk";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// Configure AWS SDK
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  sessionToken: process.env.SESSION_TOKEN,
  region: process.env.AWS_REGION,
});

async function fetchDataAndUploadToS3() {
  try {
    const s3 = new AWS.S3();
    // Fetch data from third-party API
    const response = await axios.get(process.env.API_URL);

    console.log(JSON.stringify(response.data));
    const data = JSON.stringify(response.data);

    // S3 upload parameters
    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: `api-data-${Date.now()}.json`,
      Body: data,
      ContentType: "application/json",
    };

    // Upload data to S3
    // s3.upload(params, (err, result) => {
    //   if (err) {
    //     console.error("Error uploading to S3:", err);
    //   } else {
    //     console.log("File successfully uploaded to S3 at:", result.Location);
    //   }
    // });
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}

// Run the function
fetchDataAndUploadToS3();
