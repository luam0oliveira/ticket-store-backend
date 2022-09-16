class AppError extends Error {
  constructor(private statusCode: number, message: string) {
    super(message);
  }
}

export { AppError };
