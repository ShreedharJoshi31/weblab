<?php
$value = $_GET['query'];
$formfield = $_GET['field'];

if ($formfield == "username") {
  if (strlen($value) < 4) {
    echo "Must be 3+ letters";
  } else {
    echo "<span>Valid</span>";
  }
}

if ($formfield == "password") {
  if (strlen($value) < 6) {
    echo "Password too short";
  } else {
    echo "<span>Strong</span>";
  }
}

if ($formfield == "email") {
  if (!filter_var($value, FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email";
  } else {
    echo "<span>Valid</span>";
  }
}

if ($formfield == "website") {
  if (!filter_var($value, FILTER_VALIDATE_URL)) {
    echo "Invalid website";
  } else {
    echo "<span>Valid</span>";
  }
}
?>
