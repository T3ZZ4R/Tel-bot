const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// صفحه اصلی
app.get("/", (req, res) => {
    res.json({
        message: "Hello from Express!",
        status: "Server is running"
    });
});

// دریافت اطلاعات
app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "Ali" },
        { id: 2, name: "Sara" }
    ]);
});

// ارسال اطلاعات
app.post("/api/users", (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: "User created successfully",
        user
    });
});

// مدیریت خطا 404
app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});