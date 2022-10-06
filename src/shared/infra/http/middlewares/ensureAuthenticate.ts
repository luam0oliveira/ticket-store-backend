import { config } from "dotenv";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/error/AppError";

config();

const ensureAuthentication = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(400, "Is necessary token to access this route");
  }

  const [, token] = authHeader.split(" ");

  try {
    const test = verify(token, String(process.env.JWT_SECRET_KEY));
    console.log(test);
  } catch (error) {
    console.log(error);
  }
};

export { ensureAuthentication };
