"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataService = exports.addDataService = void 0;
const userModel_1 = require("../model/userModel");
const addDataService = (data) => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            let newArr = [];
            for (let i = 0; i < data.length; i++) {
                const { project_name, project_id, country, partner, project_type, announcement, fid, operation, project_status, a_capacity, e_capacity, sector, fate_of_carbon, ccus_hub, region } = data[i];
                const newObj = {
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
            const result = yield (0, userModel_1.addDataModel)(newArr);
            resolve(result);
        }
        catch (error) {
            console.error("Database connection error:", error);
            reject("Data could not be processed.");
        }
    }));
};
exports.addDataService = addDataService;
const fetchDataService = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield (0, userModel_1.fetchDataModel)();
            resolve(result);
            return;
        }
        catch (error) {
            console.error("Database connection error:", error);
            reject("Error fetching data");
        }
    }));
};
exports.fetchDataService = fetchDataService;
