
function outputUpdate(num) {
    document.querySelector('#rangeOutput').value = num;
}

/**
 *  text area validation
 */

function textAreaValidation() {
    var txt = document.getElementById('textAreaError');
    txt.innerText = "";
    var x = document.getElementById("response").value;
    
    if(x === '' || x === null) {
        txt.innerText = "Please type a response ";
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
    document.getElementById('radioError').innerText = "";
    var radios = document.getElementsByName('information');

    for(var i = 0; i < radios.length; i++) {
        if(radios[i].checked) {
            return true;
        }
    }

    document.getElementById('radioError').innerText = 'You must select a value';
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
/** revamped checkbox **/
function getCheckedNew() {
    var none = document.getElementById('none');
    var inputs = document.getElementsByClassName('check');

    for(var i = 0; i < inputs.length; i++) {
        if (none.checked) {
            inputs[i].checked = false;
            inputs[i].disabled = true;
        } else {
            inputs[i].disabled = false;
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
    var total = 0;
    var okay = false;
    document.getElementById('errorMsg').innerText = "";
    var toAdds = document.getElementsByClassName("toAdd");
    for (var i = 0; i < toAdds.length; i++) {
        total += parseInt(toAdds[i].value);
    }

    if(total < 100){
        var toChange = 100 - total;
        document.getElementById('errorMsg').innerText = "number is too low, please increase the amount by " + toChange;
        console.log('sum',total);
        okay =  false;
    }
    else if(total > 100) {
        var toReduce = total - 100;
        document.getElementById('errorMsg').innerText = 'Number is too high please reduce the total by ' + toReduce;
        okay = false;
    }
    else {
        okay = true;
    }
    return okay;
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

/** numeric standard **/
function numValidate() {

    var x = document.getElementById('numInput').value;
    var txt = document.getElementById('errMsg');
    txt.innerText = "";
    
    if(x === '') {
        txt.innerText = "please enter in a value";
        return false;
    } else if (isNaN(x)) {
        txt.innerText = "Input must be a number";
        return false;
    }
}

/** Validate 10 - date **/
function validateDate() {
    
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var year = document.getElementById('year').value;
    var text = document.getElementById('errMsg');
    text.innerText = "";
    
    if(month === "" || day === "" || year === "") {
        text.innerText = "Month, day, and year are required fields";
        return false;
    }
}

/** 03-validate **/
function validateSelectGrid() {

    var err1 = document.getElementById('question-1-error');
    var err2 = document.getElementById('question-2-error');
    var err3 = document.getElementById('question-3-error');

    err1.innerText = "";
    err2.innerText = "";
    err3.innerText = "";

    var group1 = document.getElementsByName('q1');
    var group2 = document.getElementsByName('question-2');
    var group3 = document.getElementsByName('question-3');

    var ok = true;

    // var errorMessages = document.getElementsByClassName('errMsg');
    // for(var c = 0; c < errorMessages.length;c++ )  {
    //     errorMessages[c].innerText = "";
    // }
    //
    for (var i = 0; i < group1.length; i++) {
        if (group1[i].checked === false) {
            err1.innerText = "You must enter a value for question onpe";
            ok = false;
        }
    }
    // for(var j = 0; j < group2.length; j++) {
    //     if (group2[j].checked === false) {
    //         err2.innerText = "You must enter a value for question 2";
    //         okay = false;
    //     } else  {
    //         okay = true;
    //     }
    // }
    // for(var k = 0; k < group3.length; k++) {
    //     if (group3[k].checked === false) {
    //         err3.innerText = "You must enter a value for question 3";
    //         okay = false;
    //     } else {
    //         okay = true;
    //     }
    // }
    return ok;

}

/** 19 validation **/
function validateMultiDrop() {

    document.getElementById('errMsg').innerText = "";
    document.getElementById('errMsg').innerText = "";
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


/** 08 inputs **/
function validateInputs() {
    var errInputs = document.getElementsByClassName('errorMsg');
    for(var i = 0; i < errInputs.length; i++)  {
        errInputs[i].innerText = "";
    }
    var q1 = document.getElementById('question-1').value;
    var q2 = document.getElementById('question-2').value;
    var q3 = document.getElementById('question-3').value;
    var q4 = document.getElementById('question-4').value;
    var q5 = document.getElementById('question-5').value;
    var ok = true;


    if(q1 === "" || q1 === null) {
        document.getElementById('err-1').innerText = "Please fill out question 1";
        ok =  false;
    }
    if(q2 === "" || q2 === null) {
        document.getElementById('err-2').innerText = "Please fill out question 2";
        ok =  false;
    }
    if(q3 === "" || q3 === null) {
        document.getElementById('err-3').innerText = "Please fill out question 3";
        ok = false;
    }
    if(q4 === "" || q4 === null) {
        document.getElementById('err-4').innerText = "Please fill out question 4";
        ok =  false;
    }
    if(q5 === "" || q5 === null) {
        document.getElementById('err-5').innerText = "Please fill out question 5";
        ok = false;
    }
    return ok;
}

/** Look at media queries for adding or subtracting ARIA labelling **/
function mediaLabelling() {
    var mq = window.matchMedia('@media all and (max-width: 480px)');

    if(mq.matches) {
        var inputs = document.getElementsByClassName('option-input');
        for(var i = 0; i < inputs.length; i++) {
            inputs[i].removeAttribute('aria-label');
        }
    }
}
mediaLabelling();