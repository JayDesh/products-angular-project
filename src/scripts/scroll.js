var scrollDemoApp = angular.module( 'scrollDemoModule', [])
  .controller( 'scrollController', function ( $scope, $location, $anchorScroll ) {
    $scope.scrollTo = function ( scrollLocationId ) {
      $location.hash( scrollLocationId );
      $anchorScroll.yOffSet = 20;
      $anchorScroll();
    }
  });
