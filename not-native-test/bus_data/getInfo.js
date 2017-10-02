console.log("body")

let busStops = [];

fetch('https://otp.straeto.is/otp/routers/default/index/stops/')
    // .then((response)=>response.json())
    // .then(console.log(response))
    .then(function(response) {
    return response.text()
	}).then(function(body) {
	// document.body.innerHTML = body
	busStops = JSON.stringify(body);

	document.body.innerHTML = busStops

	console.log(busStops)

	})
    .catch(function(error) {
	  console.log('There has been a problem with your fetch operation: ' + error.message);
	});


