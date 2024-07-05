import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dtzslhjha",
  api_key: "397423818785344",
  api_secret: "PGG4GbMoEQVfLGOVaJFaOZL8SsQ", // Click 'View Credentials' below to copy your API secret
});

// Upload an image
const uploadOnCloudinary = async (localfilePath) => {
  try {
    if (!localfilePath) {
      return null;
    }
    const response = await cloudinary.uploader.upload(localfilePath, {
      resource_type: "auto",
    });

    // after adding the file to cloudinary
    console.log(
      "Image has been uploded to cloudinary successfully",
      response.url
    );
    return response;
  } catch (error) {
    fs.unlinkSync(localfilePath);
    return null;
  }
};


export {uploadOnCloudinary}