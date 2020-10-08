function clearBox(){
    const myBox = document.getElementById('name')
    let text = myBox.value
    document.getElementById('search').innerHTML = text
    myBox.value = ''
}

export { clearBox }