import { asyncHandler } from "../utils/AsyncHandler.js";

const registerUser = asyncHandler((req, res) => {
  res.status(200).json({
    message: "Ok!",
  });
});

export { registerUser };
