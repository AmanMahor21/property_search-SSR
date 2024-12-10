import express from "express";
// import propertyRoutes from "./routes/propertyRoutes";
import propertyRoutes from "../server/routes/property.routes";

const app = express();

app.use(express.static("public"));

app.use("/", propertyRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
