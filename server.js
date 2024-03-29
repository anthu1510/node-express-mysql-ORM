require("dotenv").config();
const http = require("http");
const app = require("./src/start/app");

const server = http.createServer(app);

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server start port at ${port}`);
});
