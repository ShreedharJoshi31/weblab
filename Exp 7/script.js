function checkForm() {
  var name = document.getElementById("username1").value;
  var password = document.getElementById("password1").value;
  var email = document.getElementById("email1").value;
  var website = document.getElementById("website1").value;

  if (name == "" || password == "" || email == "" || website == "") {
    alert("Fill All Fields");
  } else {
    var username1 = document.getElementById("username");
    var password1 = document.getElementById("password");
    var email1 = document.getElementById("email");
    var website1 = document.getElementById("website");

    if (
      username1.innerHTML == "Must be 3+ letters" ||
      password1.innerHTML == "Password too short" ||
      email1.innerHTML == "Invalid email" ||
      website1.innerHTML == "Invalid website"
    ) {
      alert("Fill Valid Information");
    } else {
      document.getElementById("myForm").submit();
    }
  }
}

function validate(field, query) {
  var xmlhttp;
  console.log(query);

  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
  } else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById(field).innerHTML = xmlhttp.responseText;
    } else if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {
      document.getElementById(field).innerHTML =
        "Error Occurred. <a href='index.html'>Reload Or Try Again</a> the page.";
    }
  };
  xmlhttp.open(
    "GET",
    "http://localhost:3000/validate?field=" + field + "&query=" + query,
    true
  );
  xmlhttp.send();
}
