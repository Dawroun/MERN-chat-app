const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("API is RUnnig");
});

app.get()

app.listen(5500, console.log("Server started on PORT 5500"));
