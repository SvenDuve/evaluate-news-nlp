function handleResponse(text){

    let positivity = 'Your text has from Negative N to Positive P a score of ' + text.score_tag
    let score = 'The score is found with a confidence of ' + text.confidence + 'per cent'    
    document.getElementById('positivity').innerHTML = positivity;
    document.getElementById('score').innerHTML = score;

}

export { handleResponse }