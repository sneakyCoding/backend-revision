import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        // await dbConnect();
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        })
    } catch (err) {
        console.log("Something went wrong..", err);
    }
}

startServer();