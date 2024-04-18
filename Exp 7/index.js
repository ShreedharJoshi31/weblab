const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/validate", (req, res) => {
  const value = req.query.query;
  const formfield = req.query.field;

  if (formfield === "username") {
    if (value.length < 4) {
      res.send("Must be 3+ letters");
    } else {
      res.send("<span>Valid</span>");
    }
  }

  if (formfield === "password") {
    if (value.length < 6) {
      res.send("Password too short");
    } else {
      res.send("<span>Strong</span>");
    }
  }

  if (formfield === "email") {
    if (!validateEmail(value)) {
      res.send("Invalid email");
    } else {
      res.send("<span>Valid</span>");
    }
  }

  if (formfield === "website") {
    if (!validateURL(value)) {
      res.send("Invalid website");
    } else {
      res.send("<span>Valid</span>");
    }
  }
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Helper function to validate URL
function validateURL(url) {
  const re = /^(ftp|http|https):\/\/[^ "]+$/;
  return re.test(url);
}

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
