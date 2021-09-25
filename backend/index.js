const express = require("express");
const conectToMongo = require("./db");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
conectToMongo();

app.use(cors());
app.use(express.json());

// Available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`inotebook Server has started on port http://localhost:${port}`);
});
