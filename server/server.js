import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.json({
        success: true,
        name: "LIMITLEZZ",
        service: "LIMITLEZZ API",
        status: "online",
        message: "LIMITLEZZ backend is running 🔥"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        service: "LIMITLEZZ API",
        status: "online",
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log("");
    console.log("🔥 LIMITLEZZ API ONLINE");
    console.log(`🚀 Port: ${PORT}`);
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("");
});