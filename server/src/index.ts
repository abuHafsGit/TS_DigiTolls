import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

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

// Server start
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});
