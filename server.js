//7. Require the following npm packages inside of the server.js file:/express
//dependencies
const express = require("express");
//
const PORT = process.env.PORT || 8080;

const app = express();

// // Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static('public'));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`)
);
