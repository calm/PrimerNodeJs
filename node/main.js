var http = require('http');


function noExistes404(request, response){
	response.writeHead(404, {"Content-type":""});
	response.write("no existes...");
	response.end();
}


function onRequest(request, response){
	console.log("comenzo el onrequest" + request.url);
	if (request.url == '/') {
		response.writeHead(200, {"Content-type":""});
		response.write("aqui va some data.. I've got you by the horns");
		response.end();/**/
	}else {
		noExistes404(request, response);
	}

//comentario


//auno dos tres catorce
//probando
}


var server = http.createServer(onRequest).listen(8888);
console.log("server corriendo....");
//server.close();
