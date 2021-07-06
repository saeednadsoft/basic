class ApiError extends Error {
  constructor(
    statusCode,
    message,
    validation,
    isOperational = true,
    stack = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (validation) this.validation = validation;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
    this.stack = this.stack?.split(' ').join('');
  }
}

module.exports = ApiError;
