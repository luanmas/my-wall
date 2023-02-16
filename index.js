const express = require("express");
const PORT = 3000;
const apiRoute = require("./routes/api.js");

const app = express();
const path = require("path");

app.use("/api" , apiRoute);
app.use(express.static(path.join(__dirname , "public")))


app.listen(PORT , () => {
    console.log("Server running in port " + PORT);
})