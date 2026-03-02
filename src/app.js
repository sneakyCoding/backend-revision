import express from 'express';
import Routes from "./routes/routes.js"

const app = express();
app.use(express.json());

app.use(Routes);

app.get('/health', (req, res) => {
    res.status(200).json({
        status: "success",
        uptime: process.uptime()
    });
});

export default app;