import { NextFunction, Request, Response } from "express";

import { Secret } from "jsonwebtoken";
import config from "../../config";

import { StatusCodes } from "http-status-codes";
import API_Error from "../../error/apiError";
import { jwtHelpers } from "../../utils/jwtToken";

const AuthGard =
  () => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) {
        throw new API_Error(StatusCodes.UNAUTHORIZED, "You are not authorized");
      }
      let verifiedUser = null;

      verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt.secret_token as Secret
      );
      req.user = verifiedUser;
      //check role

      next();
    } catch (error) {
      next(error);
    }
  };

export default AuthGard;
