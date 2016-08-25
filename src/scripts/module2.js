var _ = require( 'lodash');

var listOfUsers = [{"id":1,"first_name":"Fred","last_name":"Gardner","email":"fgardner0@ft.com","gender":"Male","ip_address":"239.66.137.40"},
{"id":2,"first_name":"Aaron","last_name":"Fuller","email":"afuller1@alibaba.com","gender":"Male","ip_address":"32.229.21.241"},
{"id":3,"first_name":"Joshua","last_name":"Rogers","email":"jrogers2@behance.net","gender":"Male","ip_address":"232.140.220.223"},
{"id":4,"first_name":"Timothy","last_name":"Howell","email":"thowell3@tinypic.com","gender":"Male","ip_address":"186.178.219.164"},
{"id":5,"first_name":"Jennifer","last_name":"Henderson","email":"jhenderson4@webnode.com","gender":"Female","ip_address":"63.152.220.216"},
{"id":6,"first_name":"Robin","last_name":"Morrison","email":"rmorrison5@gmpg.org","gender":"Female","ip_address":"15.185.137.41"},
{"id":7,"first_name":"Tammy","last_name":"Brooks","email":"tbrooks6@nymag.com","gender":"Female","ip_address":"126.28.139.166"},
{"id":8,"first_name":"Catherine","last_name":"Webb","email":"cwebb7@unicef.org","gender":"Female","ip_address":"105.74.70.122"},
{"id":9,"first_name":"Howard","last_name":"Freeman","email":"hfreeman8@tuttocitta.it","gender":"Male","ip_address":"141.63.136.30"},
{"id":10,"first_name":"Sandra","last_name":"Weaver","email":"sweaver9@omniture.com","gender":"Female","ip_address":"241.212.197.209"},
{"id":11,"first_name":"Lawrence","last_name":"Willis","email":"lwillisa@blog.com","gender":"Male","ip_address":"94.41.63.25"},
{"id":12,"first_name":"Steven","last_name":"Frazier","email":"sfrazierb@cnbc.com","gender":"Male","ip_address":"80.237.116.158"},
{"id":13,"first_name":"Mary","last_name":"James","email":"mjamesc@nationalgeographic.com","gender":"Female","ip_address":"95.126.112.221"},
{"id":14,"first_name":"Lori","last_name":"Woods","email":"lwoodsd@toplist.cz","gender":"Female","ip_address":"14.163.26.31"},
{"id":15,"first_name":"Jimmy","last_name":"Rose","email":"jrosee@mediafire.com","gender":"Male","ip_address":"111.85.181.151"},
{"id":16,"first_name":"Amanda","last_name":"Lane","email":"alanef@walmart.com","gender":"Female","ip_address":"213.79.5.209"},
{"id":17,"first_name":"Jerry","last_name":"Stephens","email":"jstephensg@printfriendly.com","gender":"Male","ip_address":"16.245.8.162"},
{"id":18,"first_name":"Robert","last_name":"Dunn","email":"rdunnh@wisc.edu","gender":"Male","ip_address":"40.179.159.50"},
{"id":19,"first_name":"Kathy","last_name":"Marshall","email":"kmarshalli@people.com.cn","gender":"Female","ip_address":"118.189.64.201"},
{"id":20,"first_name":"Ashley","last_name":"Powell","email":"apowellj@hc360.com","gender":"Female","ip_address":"32.236.240.119"}];

var noOfFemaleUsers = _.filter( listOfUsers, {gender : 'Female'}).length;
// alert( 'There are ' + noOfFemaleUsers);
console.log( 'module2 stuff' );
// document.write( 'Welcome to module2' );
