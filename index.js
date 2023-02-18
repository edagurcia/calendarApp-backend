require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/config");

const app = express();

dbConnection();

app.use(cors());

const port = process.env.PORT || 3500;

app.use(express.static("public"));

app.use(express.json());

// rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/events", require("./routes/events"));

app.listen(port, () => console.log(`Servidor express en puerto ${port}`));
