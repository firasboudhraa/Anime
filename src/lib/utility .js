const sendSuccessResponse = (res, codeStatus = 200, data = []) => {
    res.status(codeStatus).json({
      success: true,
      status: codeStatus,
      data: data,
    });
  };
  
  const sendSuccessfulCreation = (res) => {
    sendSuccessResponse(res, 201);
  };
  
  const sendSuccessfulDeletion = (res) => {
    sendSuccessResponse(res, 204);
  };
  
  const sendSuccessfulUpdate = (res) => {
    sendSuccessResponse(res);
  };
  
  const sendSuccessfulRead = (res) => {
    sendSuccessResponse(res);
  };
  
  module.exports = {
    sendSuccessResponse,
    sendSuccessfulCreation,
    sendSuccessfulDeletion,
    sendSuccessfulUpdate,
    sendSuccessfulRead,
  };
  