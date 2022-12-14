const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const controllers = require("./controllers/controller");

app.use("/", express.json());
app.post("/form_submit", controllers.DataSubmit);
app.use("*", (req, res, error) => {
  res.json({ message: error.message, status: 400 });
});
const port = 3001 || 3000 || "URL";
app.listen(port, () => {
  try {
    console.log("server started at", port);
  } catch (err) {
    console.log("error in server", 500);
  }
});
