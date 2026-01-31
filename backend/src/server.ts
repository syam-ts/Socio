import express, { Express } from "express";
import { config } from "dotenv";
config({
  path: ".env",
});

class Server {
  app: Express;
  port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
  }

  connect() {
    this.app.listen(this.port, () => {
      console.log(`Server listen to port ${this.port}`);
    });
  }
}


export default Server;