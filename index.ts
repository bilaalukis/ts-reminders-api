const express = require("express");
const app = express();
import remindersRouter from "./routers/reminders";

app.use(express.json());
app.use("/reminders", remindersRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(8000, () => console.log("Server started..."));
