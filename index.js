const express = require("express");
const cors = require("cors");
const {connection} = require("./src/config/db");
require("dotenv").config();
const {userRouter} = require("./src/Routes/user.routes");
const {noteRouter} = require("./src/Routes/note.routes");
const PORT = process.env.PORT

const app = express();
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/notes", noteRouter)

app.get("/", async(req, res) =>{
    try {
        res.setHeader("Content-type", "text/html");
        res.status(200).send("<h1>Welcome to the Server</h1>");
    } catch (error) {
        res.status(400).send({"error" : error});
    }
})


app.listen(PORT, async()=>{
    try {
        await connection;
        console.log("Connected to the DataBase");
        console.log(`Server is Runing on port 8080`);
    } catch (error) {
        console.log(error);
    }
})
