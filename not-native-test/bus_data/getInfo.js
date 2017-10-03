console.log("body")

let IDs = [];

let getData = () => {
	fetch('https://otp.straeto.is/otp/routers/default/index/stops/')
    // .then((response)=>response.json())
    // .then(console.log(response))
    .then(function(response) {

   		return response.json()

	}).then(function(json) {
		console.log(json)
		IDs.push(json)

	})
    .catch(function(error) {
	  console.log('There has been a problem with your fetch operation: ' + error.message);
	});

	console.log(IDs)
}

setTimeout(getData, 1000)



// function createElements(elements) {
//     // Assuming you get an array of objects.
//     elements = JSON.parse(elements);

//     elements.forEach(funciton(element) {
//         let div = document.getElementById(element.id);
//         div.innerHTML = element.text;
//     });
// }

// var request = new XMLHttpRequest();

// request.onload = createElements;
// request.open("get", "busStops.json", true);
// request.send();



// // var someIp = 'busStops';
// var xmlhttp = new XMLHttpRequest();

// xmlhttp.onreadystatechange = function() {
//   if (xmlhttp.readyState == XMLHttpRequest.DONE) {
//     if (xmlhttp.status == 200) {
//       document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//     }
//     else if (xmlhttp.status == 400) {
//       alert('There was an error 400');
//     }
//     else {
//       alert('something else other than 200 was returned');
//     }
//   }
// };

// xmlhttp.open("GET", "file://busStops.json", true);
// xmlhttp.send();









