function colorBackChange() {
    switch(document.getElementById('colorBack').value) {
        case 'red': document.getElementById('result').style.backgroundColor = 'red'; break;
        case 'blue': document.getElementById('result').style.backgroundColor = 'blue'; break;
        case 'green': document.getElementById('result').style.backgroundColor = 'green'; break;
        case 'yellow': document.getElementById('result').style.backgroundColor = 'yellow'; break;
        case 'pink': document.getElementById('result').style.backgroundColor = 'pink'; break;
    }


// experiment
    // if (document.getElementById('colorBack').value == 'red') {
    //     document.getElementById('result').style.backgroundColor = 'red'
    // }
}


//  experiments

function colorButton() {
    document.getElementById('button').style.backgroundColor = 'red'
}

function colorButtonNew() {
    document.getElementById('button').style.backgroundColor = 'green'
}

function textButton() {
    let button = document.getElementById('button');
    button.onclick = sayWhatIAm;
    
    function sayWhatIAm() {
        alert(this.innerHTML);
    }
}
textButton()

function newColorAlert() {
    let button = document.getElementById('button')

    function borderWidth() {
        button.style.borderWidth = '5px'
    }
    
    function borderColor() {
        button.style.borderColor = 'blue'
    }
    
    button.addEventListener('click', borderWidth);
    button.addEventListener('click', borderColor)
}
newColorAlert() 



//  experiments
// function exp() {
//     let option = document.querySelectorAll('input')[2]
    
//     function newFunc() {
//         let body = document.querySelector('body')
//         body.style.backgroundColor = 'red'
//         // option.style.backgroundColor = 'grey'
//     }
//     option.addEventListener('click', newFunc)
// }
// exp()