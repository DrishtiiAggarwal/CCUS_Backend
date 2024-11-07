import { Request, Response } from "express";
import pool from '../db'

export const addData = async (req: Request, res: Response): Promise<void> => {
    try {
        const client = await pool.connect();
        console.log("Connected to the database");

        client.release(); 
        console.log("Admin login request received");
        res.send("Admin logged in");
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Error connecting to the database");
    }
};

