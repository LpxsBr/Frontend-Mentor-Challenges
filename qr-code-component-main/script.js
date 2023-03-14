const text = 'scan the QR code to visit Frontend Mentor and take your coding skills to the next level';

let newText = []
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function autoComplete(text, id, time){
    let i = 0
    var complete = setInterval(()=>{
        newText.push(text[i])
        document.getElementById(id).innerHTML = newText.join('')
        i++
        console.log('interval on')
        if(i-1 == text.length){
            document.getElementById(id).innerHTML = text;
            clearInterval(complete)
            console.log('interval off')
        }
    }, (time*1000))
}

autoComplete(text, 'text', 1/15)