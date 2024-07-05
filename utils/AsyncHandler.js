const asyncHandler = (requestHandlerFunction) => {
  return (req, res, next) => {
    Promise.resolve(
      requestHandlerFunction(req, res, next).catch((Error) => next(Error)).finally(
        console.log("Execution Completed!")
      )
    );
  };
};

export { asyncHandler };
