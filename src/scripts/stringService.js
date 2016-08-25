 // require('./script.js');

myApp.factory( 'stringService', function () {
  return {
    processString : function ( inputString ) {
      var outputString ='';
      for ( var i=0; i<inputString.length; i++ ){
          if(  i> 0 && inputString[i] === inputString[i].toUpperCase() )
            outputString = outputString +  ' ' + inputString[i];
          else {
            outputString = outputString  + inputString[i];
          }
      }
      return outputString;
    }
  }
} );
