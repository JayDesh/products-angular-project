
var express = require( 'express' ),
    path = require( 'path' ),
    bodyParser = require( 'body-parser' ),
    cons = require( 'consolidate'),
    // dust = require( 'dustjs.helpers'),
    pg = require( 'pg' ),
    app = express();




var connectString = "postgres://jayeshd:Exilant123@localhost/productsdb";


app.use( express.static(path.join(__dirname,'public')));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false}) );

app.get( '/', function ( req, res ) {
  pg.connect( connectString, function(err, client, done){
      var url = 'http://localhost:8000',
          querySql = 'SELECT * FROM product';
          query_condition = '';

      if ( err ) {
        return console.error('error fetching data');
      }

      if ( req.query.id ) {
        querySql = querySql + " where id = '" + req.query.id + "'";
      } else if ( req.query.name ) {
        querySql = querySql + " where name = '" + req.query.name + "'";
      }
      console.log( "req.parmas = " + req.params.name );
      console.log( "req.query = " + req.query.name );
      // console.log( querySql);
      client.query(querySql, function(err,result){
        if(err){
          return console.error('error running query');
        }

        setResponseHeaders( res, url );
        res.send(result.rows);
        done();
      });
  });

} );

//http://localhost:3000/searchByName/Lotstring
app.get( '/searchByName/:name', function ( req, res ) {

    setTimeout( getData( req, res, req.params.name ), 10000 );
    // console.log( 'in search by name');
    // var requestingURL = 'http://localhost:8000',
    // querySql = 'SELECT * FROM product';
    //
    // pg.connect( connectString, function( err, client, done ) {
    //   if( err ) {
    //     return console.error( 'error connecting to datasource' );
    //   }
    //   if( req.params.name ){
    //     querySql = querySql + " where name = '"  + req.params.name + "'";
    //   }
    //   console.log( 'querySql = ' + querySql );
    //   client.query( querySql, function ( err, result ){
    //     if ( err ){
    //       return console.error ( 'error running query' );
    //     }
    //
    //     setTimeout( function () {
    //       console.log ( 'in set timeout' );
    //     }, 10000);
    //
    //     console.log('after set timeout');
    //     setResponseHeaders ( res, requestingURL );
    //     res.send( result.rows );
    //     done();
    //
    //    });
    // });
  });

app.listen( 3000, function () {
  console.log('server started on 3000');
});


function setResponseHeaders ( res, url ) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', url );

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  return res;

}

function getData( req, res, name ) {
  console.log( 'in search by name');
  var requestingURL = 'http://localhost:8000',
  querySql = 'SELECT * FROM product';

  pg.connect( connectString, function( err, client, done ) {
    if( err ) {
      return console.error( 'error connecting to datasource' );
    }
    if( name ){
      querySql = querySql + " where name = '"  + name + "'";
    }
    console.log( 'querySql = ' + querySql );
    client.query( querySql, function ( err, result ){
      if ( err ){
        return console.error ( 'error running query' );
      }

      setResponseHeaders ( res, requestingURL );
      res.send( result.rows );
      done();

     });
  });
}
