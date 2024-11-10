import { Request, Response } from "express";
import { addDataService, fetchDataService } from "../services/userService";


export const addData = async (req: Request, res: Response): Promise<void> => {
    try {
        const data=req.body.data;
        const result=await addDataService(data);
        res.status(200).send(result);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Error connecting to the database");
    }
};
export const fetchData = async (req: Request, res: Response): Promise<void> => {
    try {
        const result=await fetchDataService();
        res.status(200).send(result);
    } catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Error connecting to the database");
    }
};

