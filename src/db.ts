import dotenv from "dotenv";
import { Pool, PoolConfig } from "pg";

dotenv.config();

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DATABASE
} = process.env as {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: string;
  DB_DATABASE: string;
};



const poolConfig: PoolConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: parseInt(DB_PORT, 10), // Convert DB_PORT to a number
  database: DB_DATABASE,
  ssl: {
    rejectUnauthorized: false // Disable SSL verification
  }
};

const pool = new Pool(poolConfig);

export default pool;
