function handleResponse(text){
    console.log("Hello")
    let tone = ''
    switch (text.score_tag) {
        case 'N+':
            tone = 'very negative ';
            break;
        case 'N':
            tone = 'negative ';
            break;
        case 'NEU':
            tone = 'neutral ';
            break;
        case 'P':
            tone = 'positive ';
            break;
        case 'P+':
            tone = 'very positive ';
            break;
        case 'NONE':
            tone = 'unclear '
            break;
        default:
            tone = ' '
    }
    console.log(tone)

    let statement = 'Your text has a ' + tone + 'tone.'
    let score = 'This judgement is found with a confidence of ' + text.confidence + 'per cent'    
    document.getElementById('positivity').innerHTML = statement;
    document.getElementById('score').innerHTML = score;

}

export { handleResponse }