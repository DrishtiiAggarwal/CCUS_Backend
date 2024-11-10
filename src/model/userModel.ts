import pool from "../db";
import { ccusType } from "../types/dataType";
import { addDataQuery, fetchDataQuery } from "./queries";

export const addDataModel = async (data: ccusType[]): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            await pool.query("BEGIN");
            for (let i = 0; i < data.length; i++) {
                const {
                    project_name,
                    project_id,
                    country,
                    partner,
                    project_type,
                    announcement,
                    fid,
                    operation,
                    project_status,
                    a_capacity,
                    e_capacity,
                    sector,
                    fate_of_carbon,
                    ccus_hub,
                    region
                } = data[i];

                await pool.query(addDataQuery, [
                    project_id,
                    project_name,
                    country,
                    partner,
                    project_type,
                    announcement,
                    fid,
                    operation,
                    project_status,
                    a_capacity,
                    e_capacity,
                    sector,
                    fate_of_carbon,
                    ccus_hub,
                    region
                ]);
            }
            await pool.query("COMMIT");
            resolve("Data inserted successfully");
        } catch (error) {
            await pool.query("ROLLBACK");
            reject(error);
        }
    });
};

export const fetchDataModel = (): Promise<any> => {
    return new Promise(async (resolve,reject) => {
        try {
            const result = await pool.query(fetchDataQuery);
            resolve(result.rows);
            return;
        }
        catch (error) {
            console.error("Database connection error:", error);
            reject("Error fetching data");
        }
    })
}


