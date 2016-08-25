var scopeDemoApp =  angular.module("scopeDemoModule", [])
  .controller("redController", function ( $scope, $rootScope ) {
    $scope.redControllerColor = 'I am red color controller';
    $rootScope.rootElementColor = 'I am root element color';
    $rootScope.yelloValue = 'Yellow - Generated by root controller scope'
    $scope.yelloValue = 'Yellow - Generated by <b>red controller</b>'
  } )
  .controller( "greenController", function ( $scope ) {
    $scope.greenControllerColor = 'I am green color controller';
  });
