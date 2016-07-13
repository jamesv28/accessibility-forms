
function outputUpdate(num) {
    document.querySelector('#rangeOutput').value = num;
}

/**
 *  text area validation
 */

function textAreaValidation() {
    
    var x, text;
    x = document.getElementById("quote-response").value;
    
    if(x === '' || x.indexOf('\n') > 0 || x === null) {
        text = "Please enter something";
    }

    document.getElementById('textAreaError').innerText = text;
}

/**
 * input validation
 */
function inputValidation() {
    
    var x, text;
    
    x = document.getElementById('otherConnections').value;
    if(x === '') {
        text = 'Please Enter something';
    }
    
    document.getElementById('textAreaError').innerText = text;
}

/**
 * radio group validation
 * need to select one form the radio group
 **/
function validateRadio() {
    var text = 'You must select a value';
    var radios = document.getElementsByName('information');

    for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            return true;
        }
    }

    document.getElementById('radioError').innerText = text;
    /**
     * Below is a way of giving a role of alert to the error message so after i click
     * next question it immediately goes to the error and reads it out loud
     */
    // document.getElementById('radioError').setAttribute('role','alert');
    return false;
}