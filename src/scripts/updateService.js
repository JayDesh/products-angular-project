myApp.factory( 'updateService', function ( $http, $log ) {
  return {
    getUpdates : function ( updateControllerScope ) {
        var url = '../src/data/product-updates.json';
        $http( {
          method: 'GET',
          url: url
        }).then ( function ( response ) {
            updateControllerScope.productUpdates = response.data.updates;
            $log.info( response.data.updates );
        });
    }
  }
} );
