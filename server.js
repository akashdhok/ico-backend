const express = require("express");
const dotenv = require("dotenv");
dotenv.config(); // ✅ Load env variables before anything else

const { connectDB } = require("./config/database");
const landingPageRoutes = require("./routes/landingPageRoutes");
const adminRoutes = require("./routes/adminRoutes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware
app.use(morgan('dev'));
app.use(cors({
    origin: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// ✅ Test Route
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Home' });
});

// ✅ API Routes
app.use('/api/landingpage', landingPageRoutes);
app.use('/api/admin', adminRoutes);
// app.use('/api/users', userRoutes); // Uncomment when ready

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
