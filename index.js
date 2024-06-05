import { app } from "./app.js";
import dbConnection from "./db/index.js";

try {
  dbConnection()
    .then(
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
      })
    )
    .catch((error) => {
      console.log("MongoDB connection Failed!", error);
    });
} catch (error) {
  console.log("Error from Express side!" , error);
}
