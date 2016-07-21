
function outputUpdate(num) {
    document.querySelector('#rangeOutput').value = num;
}

/**
 *  text area validation
 */

function textAreaValidation() {
    
    var x, text;
    x = document.getElementById("response").value;
    
    if(x === '' || x === null) {
        // text = "Please enter something";
        document.getElementById('textAreaError').innerText = "Please type a response ";
        return false;
    }



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
                for(var j = 0; j < checked.length; j++) {
                    checked[j].checked = false;
                }
                document.getElementById('none').checked = true;
            }
        }
    }
}


/***** Validate to see if at least one checkbox is selected *****/
function validateCheckbox() {

    var checkboxes = document.getElementsByName('purpose');
    var txt = 'You must select aat least one checkbox';

    for(var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    document.getElementById('alertMsg').innerText = txt;
    return false;
}

/****** Validate Question 11 *******/
function getTotal() {
    var inputs = document.getElementsByTagName('input');
    var sum = 0;
    var alertMessage = document.getElementById('errorMsg');
    
    for(var i = 0; i < inputs.length; i++) {
        sum += parseInt(inputs[i].value);
        if(sum < 100) {
            alertMessage.innerText = "The total is too low, all of the inputs must add up to 100";
            return false;
        } else if (sum > 100) {
            alertMessage.innerText = "The total is too high, all of the inputs must add up to 100";
            return false;
        }
    }
    return true;
}

/**** handling keyboard shortcut - for people who prefer not to anser the question *****/
function key_short(e) {
    if(e.ctrlKey && e.keyCode === 70) {
        //  function you would like to add
        addFocus();
    }
}

// register the handler
document.addEventListener('keyup', key_short, false);

//simply decide which elements you would like focu on
function addFocus() {
    document.getElementById('not-answer').focus();
}


/**** try to indicate likert scale with input type = range ***/
function getRangeValues() {

    var range = document.getElementById('years-worked');

    // if(range.value === '1') {
    //     range.setAttribute('aria-label', 'very-dissatisfied');
    // } else if(range.value === '5') {
    //     range.setAttribute('aria-label', 'very-satisfied');
    // } else if(range.value === '3') {
    //     range.setAttribute('aria-describedby', 'neither');
    // }

    //tooltip is not supported for cross-browser compatibility
    

}

// getRangeValues();

/** numeric standard **/
function numValidate() {

    var x, text;

    x = document.getElementById('numInput').value;
    if(x === '') {
        document.getElementById('errMsg').innerText = "please enter in a value";
        return false;
    } else if (isNaN(x)) {
        document.getElementById('errMsg').innerText = "Input must be a number";
        return false;
    }

}

/** Validate 10 - date **/
function validateDate() {
    
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var year = document.getElementById('year').value;
    
    if(month === "" || day === "" || year === "") {
        document.getElementById('errMsg').innerText = "Month, day, and year are required fields";
        return false;
    }
}

/** 03-validate **/
// function validateSelectGrid() {
//     var err1 = document.getElementById('question-1-error');
//     var err2 = document.getElementById('question-2-error');
//     var err3 = document.getElementById('question-3-error');
//
//     var group1 = document.getElementsByName('question-1');
//     var group2 = document.getElementsByName('question-2');
//     var group3 = document.getElementsByName('question-3');
//
//     for (var i = 0; i < group1.length; i++) {
//         if (group1[i].checked === false)
//             err1.innerText = "You must enter a value";
//             return false;
//     }
//
// }

/** 19 validation **/
function validateMultiDrop() {
    var q1 = document.getElementById('question-1').value;
    var q2 = document.getElementById('question-2').value;
    var q3 = document.getElementById('question-3').value;
    var q4 = document.getElementById('question-4').value;
    
    if (q1 === "" || q2 === "" || q3 === "" || q4 === "") {
        document.getElementById('errMsg').innerText = "All inputs are required";
        return false;
    }
    return true;

}