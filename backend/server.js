const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send("SkyPulse backend is running!");
});

app.listen(3000, function () {
    console.log("Server running on http://localhost:3000");
});
app.get("/api/weather", function (req, res) {
    const city = req.query.city;

    res.json({
        message: "Weather endpoint working",
        city: city
    });
});