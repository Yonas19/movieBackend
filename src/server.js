import express from "express";

import movieRoutes from "./routes/movieRoutes.js";
const app = express();

// API route
app.use("/movies", movi);


app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});

// GET , POST , PUT, DELETE
