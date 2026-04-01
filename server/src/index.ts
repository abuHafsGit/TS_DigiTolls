import express, { Request, Response } from "express";
import cors from "cors";

import productRoute from "./routes/productRoute";


const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173"
}));

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("🚀 Server is running with TypeScript!");
});

// Example API
app.get("/api/user", (req: Request, res: Response) => {
    res.json({
        name: "Shakil",
        role: "Developer"
    });
});

app.use("/api", productRoute);

// Server start
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
