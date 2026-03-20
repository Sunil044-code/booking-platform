class ApiError extends Error {
  constructor(statusCode, message) {
    super(message); // Pass message to parent Error class
    this.statusCode = statusCode;
    this.isOperational = true; // Flag to differentiate from programming errors
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;