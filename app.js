import express from "express";
import ViteExpress from "vite-express";
import {config} from "dotenv";
config();
import pg from "pg";
const {Pool} = pg;

const app = express();
const db = new Pool({
    // eslint-disable-next-line no-undef
    connectionString: process.env.DATABASE_URL ?? "postgres://postgres:postgres@localhost:5432/postgres",
    ssl: {
        rejectUnauthorized: false
    }
})

const PORT = process.env.PORT ?? 3000;

app.get("/api", async (req, res) => {
    const client = await db.connect();
    try {
        const result = await client.query("SELECT * FROM gg_menu WHERE menu_id = $1", [req.query.id]);
        res.status(200).json({status: "ok", content: result.rows}).end();
    }
    catch (e) {
        res.status(400).send(e);
    }
    db.end();
});

ViteExpress.listen(app, PORT, () => console.log("Server is listening on port " + PORT + "..."));