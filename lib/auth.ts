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
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    console.log(decoded)
  } catch (err: any) {
    console.log(err.message);
  }

  // jwt.verify(
  //   refreshToken,
  //   process.env.REFRESH_TOKEN_SECRET,
  //   (err: any, user: any) => {
  //     if (err) {
  //       return err;
  //     }
  //     const accessToken = generateAccessToken(user);
  //     return accessToken;
  //   }
  // );
}
