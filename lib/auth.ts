import { User } from "../models";

const jwt = require("jsonwebtoken");

export function generateAccessToken(user: any) {
  return jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1800s",
  });
}

export function generateRefreshToken(user: any) {
  return jwt.sign({ email: user.email }, process.env.REFRESH_TOKEN_SECRET);
}

export function verifyRefreshToken(refreshToken: string) {
  try {
    const decodedUser = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    return generateAccessToken(decodedUser);
  } catch (err: any) {
    throw Error("Forbidden");
  }
}

export const authorizationMiddleware = (req: any, res: any, next: any) => {
  if (["login", "refreshToken"].indexOf(req.body.operationName) > -1) {
    next();
  } else {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null || token === "") {
      return res.sendStatus(401);
    }
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err: any, user: any) => {
        if (err) {
          return res.sendStatus(403);
        }
        next();
      }
    );
  }
};

export async function getUser(authHeader: string) {
  if (!authHeader) return undefined;
  const token = authHeader && authHeader.split(" ")[1];
  const decodedUser = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  const user = await User.findOne({ email: decodedUser.email });
  return user;
}
