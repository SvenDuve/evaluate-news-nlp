// const https = require('follow-redirects').https;
// // const fs = require('fs');

// const baseUrl = ''

// var textapi = new meanCloud({
//     application_key: process.meaning.API_KEY
// })

// console.log(`Your API key is ${meaning.env.API_KEY}`);



// var options = {
//     'method': 'POST',
//     'hostname': 'api.meaningcloud.com',
//     'path': '/sentiment-2.1?key=<your_key>&lang=<lang>&txt=<text>&model=<model>',
//     'headers': {
//     },
//     'maxRedirects': 20
// };

// var req = https.request(options, function (res) {
//     var chunks = [];
//     res.on("data", function (chunk) {
//       chunks.push(chunk);
//     });
//     res.on("end", function (chunk) {
//       var body = Buffer.concat(chunks);
//       console.log(body.toString());
//     });
//     res.on("error", function (error) {
//       console.error(error);
//     });
// });

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const api_key = 'c18782d6301382c11afed2771224f846';



// req.end();



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)
    // const zip = '94040,us'
    const url = baseUrl + api_key + formText
    console.log("::: Form Submitted :::")
    fetch(url)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
        console.log(res.message)
    })
}

export { handleSubmit }
