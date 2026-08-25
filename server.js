const express = require("express");
const cors = require("cors");

const db = require("./db");

const authRoutes = require("./routes/auth");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use(express.urlencoded({ extended: true }));


// Test backend
app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "ShopNest backend is running!"
    });

});


// Test MySQL
app.get("/api/test-db", (req, res) => {

    db.query("SELECT 1 AS test", (err, results) => {

        if (err) {

            console.error(err);

            return res.status(500).json({
                success: false,
                message: "Database connection failed"
            });

        }

        res.json({
            success: true,
            message: "ShopNest database connected successfully!",
            result: results
        });

    });

});


app.listen(PORT, () => {

    console.log(
        `🚀 ShopNest server running at http://localhost:${PORT}`
    );

});