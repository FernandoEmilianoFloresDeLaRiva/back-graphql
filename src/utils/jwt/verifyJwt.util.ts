import jwt from "jsonwebtoken";
import { SECRET_WORD_JWT } from "../../constants/SECRETWORD_JWT";
import { CreateTokenDto } from "../../entities/user/createTokenDTO";

export const verifyToken = (token: string): CreateTokenDto => {
  try {
    if (token) {
      const user: any = jwt.verify(token, SECRET_WORD_JWT);
      return user;
    }
    throw new Error("unable to verify token");
  } catch (error: any) {
    throw new Error(error);
  }
};
