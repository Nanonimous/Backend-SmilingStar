import express from "express";
import cors from "cors";
import mainmethods from "./src/routers/mainmethods.routes.js";
import mulmethods from "./src/routers/mulmethods.routes.js";
import authentication from "./src/routers/authentication.router.js";

const app = express();

// ✅ Apply CORS early with custom config
app.use(cors({
  origin: 'http://localhost:3000',  // frontend origin
  credentials: true,               // allow cookies/auth headers
}));

app.use(express.json());

// ✅ Define routes after middleware
app.use('/Mc-2/methods', mainmethods);
app.use('/Mc-2/methods/multiple', mulmethods);
app.use('/Mc-2/login', authentication);

export default app;
