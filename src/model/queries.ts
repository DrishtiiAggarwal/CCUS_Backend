export const addDataQuery = `
    INSERT INTO ccus_table(
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
    ) VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
    );
`;
export const fetchDataQuery=` SELECT * FROM ccus_table`