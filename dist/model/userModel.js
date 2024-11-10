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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataModel = exports.addDataModel = void 0;
const db_1 = __importDefault(require("../db"));
const queries_1 = require("./queries");
const addDataModel = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield db_1.default.query("BEGIN");
            for (let i = 0; i < data.length; i++) {
                const { project_name, project_id, country, partner, project_type, announcement, fid, operation, project_status, a_capacity, e_capacity, sector, fate_of_carbon, ccus_hub, region } = data[i];
                yield db_1.default.query(queries_1.addDataQuery, [
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
            yield db_1.default.query("COMMIT");
            resolve("Data inserted successfully");
        }
        catch (error) {
            yield db_1.default.query("ROLLBACK");
            reject(error);
        }
    }));
});
exports.addDataModel = addDataModel;
const fetchDataModel = () => {
    return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield db_1.default.query(queries_1.fetchDataQuery);
            resolve(result.rows);
            return;
        }
        catch (error) {
            console.error("Database connection error:", error);
            reject("Error fetching data");
        }
    }));
};
exports.fetchDataModel = fetchDataModel;
