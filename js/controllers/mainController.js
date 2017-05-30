// MAIN CONTROLLER
function mainController($scope) {
  $scope.users = [];
  $scope.addUser = function () {

    var firstName = $scope.userFirstName.trim();
    $scope.userFirstName = '';
    var lastName = $scope.userLastName.trim();
    $scope.userLastName = '';
    var mail = $scope.userMail.trim();
    $scope.userMail = '';

    if (firstName && lastName && mail) {
      $scope.users.push({
        firstname: firstName,
        lastname: lastName,
        email: mail
      })
    }
  }
};
