import { db } from "../config/db";
import { User } from "../entities/user/user.entity";

export const getUsers = async () : Promise<User[]> => {
  try {
    const query = "select * from users";
    const result = await db.execute(query);
    return result[0] as  User[];
  } catch (err: any) {
    throw new Error(err);
  }
}

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const query = "select * from users where email = ?";
    const result : any = await db.execute(query, [email]);
    return result[0].length > 0 ? result[0][0] : null;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createUser = async (
  email: string,
  password: string,
  url : string
): Promise<void> => {
  try {
    const query = "insert into users (email, password, url) values (?, ?, ?)";
    await db.execute(query, [email, password, url]);
  } catch (err: any) {
    throw new Error(err);
  }
};
