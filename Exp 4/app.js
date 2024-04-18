// Define the AngularJS module
var app = angular.module("myApp", []);

// Define the controller
app.controller("MainController", function ($scope) {
  // Initialize the message
  $scope.message = "Hello, AngularJS!";

  // Function to update the message
  $scope.updateMessage = function () {
    if ($scope.name) {
      $scope.message = "Hello, " + $scope.name + "!";
    } else {
      $scope.message = "Hello, AngularJS!";
    }
  };
});
