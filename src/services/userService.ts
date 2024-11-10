import { addDataModel, fetchDataModel } from "../model/userModel";
import { ccusType } from "../types/dataType"

export const addDataService = (data: any[]): Promise<any> => {
    return new Promise(async (resolve, reject) => {
        try {
            let newArr = [];
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

                const newObj: ccusType = {
                    project_id: project_id,
                    project_name: project_name,
                    country: country,
                    partner: partner,
                    project_type: project_type,
                    announcement: announcement,
                    fid: fid,
                    operation: operation,
                    project_status: project_status,
                    a_capacity: a_capacity,
                    e_capacity: e_capacity,
                    sector: sector,
                    fate_of_carbon: fate_of_carbon,
                    ccus_hub: ccus_hub,
                    region: region
                };

                newArr.push(newObj);
            }

            const result = await addDataModel(newArr)
            resolve(result);

        } catch (error) {
            console.error("Database connection error:", error);
            reject("Data could not be processed.");
        }
    });
};

export const fetchDataService = (): Promise<any> => {
    return new Promise(async (resolve, reject)=> {
    try {
        const result = await fetchDataModel();
        resolve(result);
        return;
    }
    catch (error) {
        console.error("Database connection error:", error);
        reject("Error fetching data");
    }
})
}
