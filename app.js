import express from 'express'
import "dotenv/config";
import Lab5 from "./lab5.js";
import Hello from "./hello.js"
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
ModuleRoutes(app);
CourseRoutes(app);
Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);
