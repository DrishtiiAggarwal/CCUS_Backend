import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import userRouter from './routes/userRoutes'
import Multer from "multer";
import path from "path";
import { addData } from './controllers/userController';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "public")));

const storage = Multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

export const upload = Multer({ storage: storage });

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on port: http://localhost:${port}`);
});

// Define type for the request
app.get("/addData", upload.single('file'), (req: Request, res: Response) => {
  addData(req, res);
});
app.use("/", userRouter);
