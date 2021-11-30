import express from "express";
import cors from "cors";
import { nextTick } from "process";
const volleyball = require("volleyball");
const app = express();
const port = 5500;

app.use(cors())
app.use(volleyball);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use((err: any, req: any, res: any, next: any) => {
  console.error(err.stack)
  res.status(500).send('Some error occurred!')
})

app.listen(port, () => {
  console.log(`server started at http://localhost:${ port }`);
});