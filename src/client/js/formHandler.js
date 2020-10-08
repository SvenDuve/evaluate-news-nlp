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
const api_key = 'c18782d6301382c11afed2771224f846&of=json&txt=';
const model = '&lang=en'


// req.end();



function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    const url = baseUrl + api_key + formText + model
    console.log(url)
    console.log(formText)
    console.log("::: Form Submitted :::")
        
    postData(url)
    .then(function(newData) {
        document.getElementById('results').innerHTML = newData
        console.log(newData)
    })
}

export { handleSubmit }



// post data to url/ route using an object
const postData = async ( url = '', data = {}) => {

    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        },
        maxRedirects: 20,
        body: JSON.stringify(data),
    });

    try {

        const newData = await response.text();
        return newData;

    } catch(error) {

        console.log("error", error);
    
    }
};


