export abstract class AppError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number,
    public readonly code: string,
    public readonly details?: Record<string, string>,
  ) {
    super(message);
  }
}

export class ValidationError extends AppError {
  constructor(details: Record<string, string>) {
    super("Invalid request", 400, "BAD_REQUEST", details);
  }
}

export class InternalServerError extends AppError {
  constructor() {
    super("Terjadi kesalahan pada server", 500, "INTERNAL_SERVER_ERROR");
  }
}

export class NotFoundError extends AppError {
  constructor(details: Record<string, string>) {
    super("Data tidak ditemukan", 404, "NOT_FOUND", details);
  }
}
