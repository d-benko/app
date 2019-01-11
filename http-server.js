var http = require("http");
var huejay = require("huejay")
console.log(http);
var httpserver = http.createServer(
		function(_request,response){
			console.log("Received a Client Request");
			response.write("Hi, Dear JournalDEV User.")
			console.log(httpserver)

		}
	);
httpserver.listen(8001);


debugger;

