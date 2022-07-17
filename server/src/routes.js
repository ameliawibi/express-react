import { create } from "domain";
import path from "path";
import AuthController from "./controllers/AuthController";
import ItemController from "./controllers/ItemController";
import { getOrders, createOrder } from "./controllers/OrderController";

export default function routes(app) {
  app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.get("/getuser", AuthController.getUser);
  app.get("/getitems", ItemController.getItem);
  app.post("/orders", createOrder);
  app.get("/orders", getOrders);

  // All other GET requests not handled before will return our React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
}
