"use strict";

const getResponseMessage = (statusCode, message, content) => {
  let responseMessage = {
    statusCode,
    message,
    content,
    dateTime: new Date(),
    messageConstants: null,
  };
  return responseMessage;
};

const deleteRedundancyAtrributes = (data) => {
  ["id", "matKhau", "createdAt", "updatedAt", "deletedAt"].forEach(
    (e) => delete data[e]
  );
  return data;
};

module.exports = { getResponseMessage, deleteRedundancyAtrributes };
