import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log("Connection has been established successfully.");
} catch (error) {
    console.error("Unable to connect to the database:", error);
}
app.use(cors());
app.use(express.json());
app.use('/products',productRoutes)

app.listen(3000, () => console.log("Server started on port 3000"));