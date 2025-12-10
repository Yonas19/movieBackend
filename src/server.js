import express from "express";
import { config } from "dotenv";

import movieRoutes from "./routes/movieRoutes.js";

const app = express();

// API route
app.use("/movies", movieRoutes);



const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server Running on PORT ${PORT}`);
});

// GET , POST , PUT, DELETE
