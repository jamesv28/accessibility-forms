
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

/**
 *likert validation
 **/

function likertValidation() {
    var text = "You must select one of the options";

    var radios = document.getElementsByName('satisfied');
    
    for(var i = 0; i < radios.length; i++ ) {
        if(radios[i].checked) {
            return true;
        }
    }
    document.getElementById('errorMsg').innerText= text;
    return false;
}

/**
 * dropdown validation
 **/
function dropdownValidation() {
    var input = document.getElementById('age-demographic').value;
    var txt = "you must select one option from the dropdown menu";
    
    if (input === '' || input === null) {
        document.getElementById('selectErr').innerText = txt;
    }
    
}


/***** Validating question 11 *********/
function validateMultinumber() {
    
    var outputTotal = parseInt(document.getElementById('percent-sum').value);

    var tooLow = "The total should equal 100, please change an input to total 100 ";
    console.log('output', outputTotal);
    if (outputTotal < 100) {
        document.getElementById('errorMsg').innerText = tooLow;
    } else if (outputTotal === "" || outputTotal === null) {
        document.getElementById('errorMsg').innerText = "The total should qual 100";
    }
}

/***** 04 - checkboxes - remove if non is selected *******/
function getChecked() {
    var inputs = document.getElementsByTagName("input"); //or document.forms[0].elements;
    var cbs = []; //will contain all checkboxes
    var checked = []; //will contain all checked checkboxes
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type == "checkbox") {
            cbs.push(inputs[i]);
            if (inputs[i].checked) {
                checked.push(inputs[i]);
            }
        }
    }
    console.log(checked);
}
 