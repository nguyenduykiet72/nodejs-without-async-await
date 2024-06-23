const app = require("./src/app");
const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("SIGINT", () => {
    server.close(() => {
      console.log("Server has been closed");
    });
  });

// require('dotenv').config();
// const os = require('node:os');

// console.log(os.cpus().length);
