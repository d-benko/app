import http, { createServer } from "http";
console.log(http);
var httpserver = createServer(
        function(_request,response){
            console.log("Received a Client Request");
            response.write("Hi, Dear JournalDEV User.")
            console.log(httpserver)

        }
    );
httpserver.listen(8001);


debugger;
console.log(debugger)



