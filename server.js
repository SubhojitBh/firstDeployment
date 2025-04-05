import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <div>
            <h1>Subhojit's first deployment</h1>
            <p>You can do it Subhojit, this is the start to your career</p>
        </div>
    `);
});

app.get('/aws', (req, res) => {
    res.send(`
        <div>
            <h2>Go learn daily</h2>
            <p>Be better than what you were yesterday</p>
        </div>
    `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`hosting at localhost:${port}`);
});
