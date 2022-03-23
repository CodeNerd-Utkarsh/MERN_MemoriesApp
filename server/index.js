import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

import postRoutes from "./routes/posts.js"

const app = express();

app.use(bodyParser.json({ extended: true, limit: "30mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(cors());
// * http://localhost:5000/posts
app.use("/posts", postRoutes)

const CONNECTIONURL = "mongodb+srv://UtkarshSingh:UtkarshSingh%409997@cluster0.6dueh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTIONURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`)))
    .catch((err) => console.log(err.message))

