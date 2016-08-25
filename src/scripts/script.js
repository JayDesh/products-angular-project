//// <reference path="angular.min.js"/>
var myApp = angular
  .module( "productModule", ["ngRoute"] )
  .config( function ( $routeProvider ) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
      .when("/", {
        templateUrl: 'src/templates/product-table.html',
        controller: 'productController'
      })
      .when("/products", {
        templateUrl:'src/templates/product-table.html',
        controller:'productController'
      })
      .when("/product-updates", {
        templateUrl:'src/templates/product-updates.html',
        controller: 'productUpdatesController'
      })
      .when( "/user-management", {
        templateUrl: 'src/templates/user-management.html',
        controller: 'userManagementController as umCtrl'
      })
      .when( '/product-name-search/', {
        templateURL: 'src/templates/product-details.html',
        controller: 'searchProductController',
        controllerAs: 'prdSearchCtrl'
      })
      .when('/custom-service', {
        template: '<h1>Custom Service Placeholder</h1>',
        controller:'customServiceController'
      })
      .when("/users/:id", {
        templateUrl: 'src/templates/user-details.html',
        controller: 'userController',
        controllerAs:'userCtrl'
      })
      .when( '/product-name-search/:name', {
        templateUrl: 'src/templates/product-details.html',
        controller: 'productSearchController',
        controllerAs: 'prodSearchCtrl'
      })
      .otherwise({
        redirectTo: "/"
      })
  })
  .controller( 'userManagementController', function ( $http, $route, $scope, $rootScope, $log ) {
    var vm = this;

    var i = 0 ;
    $scope.$on( '$routeChangeStart',  function ( event, next, current ) {

        $log.info( 'in $routeChange Start ' + i );
        i++;
        if( !confirm( 'Are you sure, you want leave user management and go to ' + next.$$route.originalPath ) ){
          event.preventDefault();
        }
    });
    $scope.$on( '$locationChangeStart',  function ( event, next, current ) {
      $log.info( 'in $locationChangeStart ' + i );
      i++;
        if( !confirm( 'Are you sure, you want leave user management and go to ' + next ) ){
          event.preventDefault();
        }
    });

    $scope.$on( '$routeChangeSuccess' , function ( event, next, current ) {
      $log.info( 'in $routeChangeSuccess ' + i );
      i++;
    } );

    $scope.$on( '$locationChangeSuccess', function ( event, next, current ) {
      $log.info( 'in $locationChangeStartSuccess Start ' + i );
      i++;
    });
    $http( {
      method: 'GET',
      url: '../src/data/users.json'
    }).then( function ( response ) {
        vm.users = response.data.users;
    });

  })
  .controller( "productController", function ( $scope, $http, $log, $location, $route ) {

      var url = 'http://localhost:3000/'
      // var url: '../src/data/products.json'  use this to run against local data files.
      $http({
        method: 'GET',

        url: url
      }).then( function ( response ) {
        $log.info( response);
        $scope.productCollection = response.data;
      });

      $scope.getProduct = function () {
        if( !!$scope.searchByProductName ){
            $location.url( '/product-name-search/' + $scope.searchByProductName );
        }else{
          $location.url( '/name-search' );
        }

      }

//This method modifies the product name
      // $scope.getProduct = function ( productName ) {
      //   $http({
      //     method: 'GET',
      //     // url: '../src/data/products.json'
      //     url: url + '?name=' + productName
      //   }).then( function ( response ) {
      //     $log.info( response);
      //     $scope.productCollection = response.data;
      //   });
      // };
  })
  .controller('productUpdatesController', function ( $scope, $http, $log ) {
    $http({
      method: 'GET',
      url: '../src/data/product-updates.json'
    })
    .then( function ( response ) {
        $scope.productUpdates = response.data.updates;
        $log.info( response.data.updates );
    });
  } )
  .controller( "userController", function ( $http, $log, $routeParams, $route ) {
    var vm = this;

    vm.reloadData = function () {
      $route.reload();
    }
    $http({
      method:'GET',
      url:'../src/data/user' + $routeParams.id + '.json'
    })
    .then( function ( response ) {
      vm.user = response.data.user;
      $log.info ( vm.user );
    } )
  })
  .controller( "productSearchController", function ( $http, $log, $routeParams, $route ) {
    var vm = this,
        url = '';

    if( !!$routeParams.name ){
      url = 'http://localhost:3000/searchByName/' + $routeParams.name;
    }else{
      url = 'http://localhost:3000/searchByName';
    }

    $http({
      method:'GET',
      url: url
    })
    .then( function ( response ) {
      vm.products = response.data;
      $log.info ( vm.product );
    } )
  })
  .controller("customServiceController", function( $scope, stringService, module1 ) {
    $scope.processString = function ( inputString ) {
      $scope.output = stringService.processString( inputString );
    }
  });
