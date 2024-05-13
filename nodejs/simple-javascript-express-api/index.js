import { http } from "@ampt/sdk";
import express, { Router } from "express";

// Create express app and router
const app = express();
const api = Router();

// Mount api to /api base route
app.use("/api", api);

// Hello route: /api/hello
api.get("/hello", (req, res) => {
  return res.status(200).send({ message: "Hello from the public api!" });
});

// Greet route: /api/greet/:name
api.get("/greet/:name", (req, res) => {
  const { name } = req.params;

  if (!name) {
    return res.status(400).send({ message: "Missing route param for `name`!" });
  }

  return res.status(200).send({ message: `Hello ${name}!` });
});

// Post route: /api/submit
api.post("/submit", async (req, res) => {
  return res.status(200).send({
    body: req.body,
    message: "You just posted data",
  });
});

// Expose the app to the Internet
http.node.use(app);
