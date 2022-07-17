import express from "express";
import path from "path";
import bindRoutes from "./src/routes";

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Bind route definitions to the Express application
bindRoutes(app);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
