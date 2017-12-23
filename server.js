"use strict";

let port = process.env.PORT || 3000;
let express = require("express");
let app = express();

app.set("port", port);
app.use("/", express.static(`${__dirname}/dist`));

// Send all requests to index.html so browserHistory in React Router works
app.get("*", function (req, res) {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}/`);
});
