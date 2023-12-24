import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import globalErrorHandler from "./app/middleware/globalError";
import { RootRoutes } from "./app/routes";
const app: Application = express();

// Project Middleware
app.use([cors(), express.json(), express.urlencoded({ extended: true })]);

// Application Routes
app.use("/api/v1", RootRoutes);
//Application Root Route
app.get("/", (req: Request, res: Response) => {
  res.status(200).send({ success: true, message: "Server Is Running" });
});

// Global Error Handler
app.use(globalErrorHandler);
// Not Found Route Handle
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(StatusCodes.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    errorMessages: [{ path: req.originalUrl, message: "API not found!" }],
  });
  next();
});
export default app;
