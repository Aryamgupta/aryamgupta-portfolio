const express = require("express");

const bcrypt = require("bcryptjs");

const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// fetching the routes from the files
const projectRoutes = require("./Routes/projectRoutes");
const certificatesRoutes = require("./Routes/certificatesRoutes");
const degreeRoutes = require("./Routes/degreeRoutes");
const messageRoutes = require("./Routes/messageRoutes");
const linksRoutes = require("./Routes/linksRoutes");
const personalInfoRoutes = require("./Routes/personalInfoRoutes");
const adminRoutes = require("./Routes/admminRoutes");

// for database connections
const mongoDbConnect = require("./config/db");
dotenv.config();
const path = require("path");
const { profileEnd } = require("console");
const { protect } = require("./Middleware/authAdmin");
const PersonalInfo = require("./Models/PersonalInfo");

mongoDbConnect();

const app = express();

app.use(express.json());

const PORT = 5000;

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});

app.get("/api", async (req, res) => {
  res.status(200);
  res.send("this is working");
});

// api for projects

app.use("/api/projects", projectRoutes);

// api for certificates

app.use("/api/certificates", certificatesRoutes);

// api for degree

app.use("/api/degrees", degreeRoutes);

// api for message

app.use("/api/messages", messageRoutes);

// api for links

app.use("/api/links", linksRoutes);

// api for personal information

app.use("/api/personalInfos", personalInfoRoutes);

// api for admin

app.use("/api/admin", adminRoutes);

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
