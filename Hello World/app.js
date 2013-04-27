// http எனும் module இங்கு பாவிக்கப்படுகின்றது. 
// Node.js இது போல பல உள்ளமைந்த மொடியூல்களுடன் வருகின்றது
var http = require('http');
// வழங்கி உருவாக்கம்
http.createServer(function (req, res) {
  // வழங்கி பதில் குறியெண் (Server responce code)
  res.writeHead(200, {'Content-Type': 'text/plain'});
  // பதிலில் வழங்கி அனுப்பும் செய்தி
  res.end('வணக்கம் உலகம்');
}).listen(1337); // 1337 என்ற Port இல் வழங்கி கவனித்துக்கொண்டு இருக்கும்
console.log('Server started');