"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const userController_1 = require("./controllers/userController");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './public/uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});
exports.upload = (0, multer_1.default)({ storage: storage });
const server = http_1.default.createServer(app);
server.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});
// Define type for the request
app.get("/addData", exports.upload.single('file'), (req, res) => {
    (0, userController_1.addData)(req, res);
});
app.use("/", userRoutes_1.default);
