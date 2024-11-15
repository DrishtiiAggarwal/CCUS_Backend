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
exports.fetchData = exports.addData = void 0;
const userService_1 = require("../services/userService");
const addData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body.data;
        const result = yield (0, userService_1.addDataService)(data);
        res.status(200).send(result);
    }
    catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Error connecting to the database");
    }
});
exports.addData = addData;
const fetchData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, userService_1.fetchDataService)();
        res.status(200).send(result);
    }
    catch (error) {
        console.error("Database connection error:", error);
        res.status(500).send("Error connecting to the database");
    }
});
exports.fetchData = fetchData;
