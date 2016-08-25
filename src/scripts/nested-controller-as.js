var nestedCtrlDemoApp = angular.module( 'nestedCtrlModule', [])
  .controller( 'countryController', function ( ) {
    this.name = "US";
  } )
  .controller( 'stateController', function ( $scope ) {
    this.name = "California";
  } )
  .controller ( 'cityController', function ( $scope) {
    this.name = "Fremont";
  })
