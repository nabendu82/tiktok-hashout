import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Videos from './dbModel.js'

//app config
const app = express()
const port = process.env.PORT || 9000
const connection_url = `mongodb+srv://<useyourown>:<useyourown>@cluster0.ccwhcia.mongodb.net/`

//middleware
app.use(express.json())
app.use(Cors())

//DB config
mongoose.connect(connection_url)

//API endpoints
app.get("/", (req, res) => res.status(200).send("Tiktok MERN"));

app.post("/v2/posts", async (req, res) => {
    try {
        const dbVideos = req.body;
        const data = await Videos.create(dbVideos);
        res.status(201).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get("/v2/posts", async (req, res) => {
    try {
        const data = await Videos.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(500).send(err);
    }
});

//listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`))