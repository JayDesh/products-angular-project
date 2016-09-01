myApp.factory( 'filterService', function () {
  return {
    searchInAllKeys: function( list, searchTerm ){
      var filteredList = [],
        listItem,
        keys;
      if ( searchTerm.trim() === '' || searchTerm == null ){
        return list;
      }

      for ( var i=0;i<list.length;i++){
          listItem = list[i];
          keys = Object.keys( listItem );
          for ( var j=0;j<keys.length;j++){
            if( listItem[keys[j]].toString().trim() === searchTerm ){
              filteredList.push( listItem );
              continue;
            }
          }
      }

    return filteredList;
}
}});
