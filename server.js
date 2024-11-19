import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Servidor escutando...");
});

app.get("/api", (req, res) => {
    res.status(200).send("Boas vindas à imersão!");
});