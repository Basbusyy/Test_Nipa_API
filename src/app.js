require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//-- Morgan ทุกครั้งที่มี req จะโชว์ req and res
const notFound = require("./middleware/notFound");
const err = require("./middleware/error");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ----------------------------------- Middleware
app.use(notFound);
app.use(err);
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server running on port : ${port}`));
