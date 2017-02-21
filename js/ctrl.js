angular.module('quoteApp').controller('ctrl', function($scope, quoteSvc) {

  $scope.test = "The reason Dre is not sleeping"
  $scope.quotes = quoteSvc.quotes
  $scope.addQuote = function() {
    quoteSvc.addQuote($scope.newQuote);
    $scope.newQuote = {text: "", author: ""}
  }
  $scope.removeQuote = function() {
    quoteSvc.removeQuote();
  }

  // end
})
