// Some API can request parameters in the url if the method is GET for example
var url = 'backend.api/api?token=1234567'

// Some API needs from you Header(s), to do so you need to create a response
// Object
var request = new Request(
  'backend.com/api', 
  { headers: 'some headers' }
)
