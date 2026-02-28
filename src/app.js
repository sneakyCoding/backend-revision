import express from 'express';

const app = express()

app.get('/health',(req,res) => {
    res.statusCode(200).json({
        status: "success",
        uptime: process.uptime()
    })
})

export default app;