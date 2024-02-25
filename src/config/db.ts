import { ConnectionOptions } from "mysql2";

import { createConnection } from "mysql2";

import { Connection } from "mysql2/typings/mysql/lib/Connection";
import dotenv from "dotenv";

dotenv.config();

const configConnection: ConnectionOptions = {
  host: process.env.HOST,
  user: process.env.USERDB,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
};

const dbConnection: Connection = createConnection(configConnection);
export const db = dbConnection.promise();
