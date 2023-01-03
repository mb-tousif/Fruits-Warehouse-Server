import jwt from "jsonwebtoken";
const { sign } = jwt;


// how to generate jwt from node
// require("crypto").randomBytes(64).toString("hex");

export const generateToken = (user) => {
  const payload = {
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_TOKEN, {
    expiresIn: "7 days",
  });

  return token;
};
