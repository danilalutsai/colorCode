// Fetch is a built in function in Javascript and you pass the url 
// inside the brackets
//
// Fetch will then give us the response from that url
// Fetch the request and recieve the response
// It takes a request { Object } and returns also a response { Promise }
// It also has to know what is the method of request
// If you don't specify the method it sets to default GET
// The method can be either GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS
var response = fetch('someAPI.com', {
  method: 'GET'
})

// When you fetch the data Javascript creates a request Object 
// behind the scenes
var request = new Request('someAPI.com')
// This two pieces of code are the same ===
// As is a promise and we have to wait for response from a server
// we add keyword await to await for the Promise
var response = await fetch(request)

var response // { Promise }

