import { clearBox } from "./clearBox";
import { handleResponse } from "./handleResponse";


const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const model = '&of=json&txt='
const lang = '&lang=en'


// req.end();

const getAPI = async () => {
    const res = await fetch('/api_key');

    try {
        const apiData = res.json();
        return apiData;
    } catch (error) {
        console.log("Error in reading the message", error);
    }
};


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

        const newData = await response.json();
        return newData;

    } catch(error) {

        console.log("error", error);
    
    }
};




function handleSubmit(event) {
    event.preventDefault()
    
    getAPI()

    // check what text was put into the form field
    .then(function(apiData){
        let formText = document.getElementById('name').value
        const url = baseUrl + apiData.application_key + model + formText + lang
        console.log("Before the post")
        postData(url)

        .then(function(newData){

            handleResponse(newData)

        })

        .then(() => {
            clearBox()
        })

    })

    // clearBox()
    // console.log(url)
    // console.log(formText)
    // console.log("::: Form Submitted :::")
        
}







export { handleSubmit }










