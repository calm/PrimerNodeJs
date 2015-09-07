var http = require('http');

function onRequest(request, response){
	console.log("comenzo el onrequest" + request.url);
	/*response.writeHead(200, {"Content-type":""});
	response.write("aqui va some data.. I've got you by the horns");
	response.end();*/

//comentario


//uno dos tres catorce
}

function 404noExistes(request, response){
	response.writeHead(404, {"Content-type":""});
	response.write("no existes...");
	response.end();
}


http.createServer(onRequest).listen(8888);
console.log("server corriendo....");
