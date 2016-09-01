//// <reference path="angular.min.js"/>
var myApp = angular
  .module( "productModule", ["ngRoute"] )
  .config( function ( $routeProvider ) {
    $routeProvider.caseInsensitiveMatch = true;
    $routeProvider
      .when("/", {
        template: '<div>Landing Page</div>',
        controller: 'landingController'
      })
      .when("/products", {
        templateUrl:'src/templates/product-table.html',
        controller:'productController',
        controllerAs: 'prdCtrl',
        resolve:{
          products: function($http){
            return $http.get("http://localhost:3000/")
            .then( function ( response ) {
              return response.data;
            });

          }
        }
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
  .controller('landingController', function(){})
  .controller( 'userManagementController', function ( $http, $route, $scope, $rootScope, $log ) {
    var vm = this,
        i = 0 ;

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
  .controller( "productController", function ( products,$scope, $http, $log, $location, $route ) {
      var vm = this;
      var url = 'http://localhost:3000/';

      $scope.searchResult = [];

      //Search for a product in any field.
      $scope.getProduct = function () {
        var keys,
            product;
        if( $scope.searchString.trim() === '' || $scope.searchString === null ){
            vm.searchResult = products;
        }else{
          vm.searchResult = [];
          for( var i=0;i<products.length;i++){
              product = products[i];
              keys = Object.keys( product );
              for( var j=0;j<keys.length; j++){
                if( product[keys[j]].toString().trim() === $scope.searchString ){
                  vm.searchResult.push( product );
                  continue;
                }
            }
          }
          $scope.searchResult = vm.searchResult;
          console.log( vm.searchResult );

        }
      }
      // $scope.getProduct = function () {
      //   if( !!$scope.searchByProductName ){
      //       $location.url( '/product-name-search/' + $scope.searchByProductName );
      //   }else{
      //     $location.url( '/name-search' );
      //   }

      // }

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

      vm.searchResult = products;
  })
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
  .controller('productUpdatesController', function ( $scope, updateService ) {
     updateService.getUpdates( $scope );
  } )
  .controller("customServiceController", function( $scope, stringService, module1 ) {
    $scope.processString = function ( inputString ) {
      $scope.output = stringService.processString( inputString );
    }
  });
