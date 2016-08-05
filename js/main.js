
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
 * dropdown validation
 **/
function dropdownValidation() {
    var ok = true;
    var input = document.getElementById('age-demographic').value;
    var err = document.getElementById('selectErr');
    err.innerText = "";

    if (input === '' || input === null) {
        err.innerText = "You must select a value";
        ok = false;
    }
    return ok;
    
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

/** multiple checkpoints **/
function  getCheckedMultiple(className, inputId) {
    var none = document.getElementById(inputId);
    var inputs = document.getElementsByClassName(className);
    
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
    var err = document.getElementById('alertMsg');

    err.innerText = "";
    for(var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            return true;
        }
    }
    err.innerText = "You must select at least one checkbox";
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

/** 09 numeric standard **/
function numValidate() {

    var x = document.getElementById('numInput').value;
    var txt = document.getElementById('errMsg');
    var check = document.getElementById('none');

    txt.innerText = "";
    
    if((x === '' || isNaN(x)) && check.checked === false) {
        txt.innerText = "Please either enter a number or select the checkbox";
        return false;
    }
}
/** 09 and 10 - make sure multiple inputs aren't selected **/
function notSure() {
    var none = document.getElementById('none');
    var numInput = document.getElementById('numInput');

    if (none.checked) {
        numInput.value = null;
        numInput.disabled = true;
    } else {
        numInput.disabled = false;
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

    var err = document.getElementsByClassName('errorMsg');
    for(var i = 0; i < err.length; i++) {
        err[i].innerText = "";
    }

    var ok = true;

    var ms1 = document.getElementById('question-1-single');
    var ms2 = document.getElementById('question-1-multiple');
    var ms3 = document.getElementById('question-1-no');

    var ms4 = document.getElementById('question-2-single');
    var ms5 = document.getElementById('question-2-multiple');
    var ms6 = document.getElementById('question-2-no');

    var ms7 = document.getElementById('question-3-single');
    var ms8 = document.getElementById('question-3-multiple');
    var ms9 = document.getElementById('question-3-no');

    if(!ms1.checked && !ms2.checked && !ms3.checked) {
        err1.innerText = "Question 1 needs a response";
        ok = false;
    }
    if(!ms4.checked && !ms5.checked && !ms6.checked) {
        err2.innerText = "Question 2 needs a response";
        ok = false;
    }

    if(!ms7.checked && !ms8.checked && !ms9.checked) {
        err3.innerText = "Question 3 needs a response";
        ok = false;
    }
    
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


/** Ranking Question **/
function checkRanking() {
    var txt = document.getElementById('errMsg');
    txt.innerText = "";
    var rankings = document.getElementsByClassName('rankings');
    var rankArr = [];
    var okay = true;

    for(var i = 0; i < rankings.length; i++) {
        rankArr.push(rankings[i].value);
    }

    for(var j = 0; j < rankArr.length; j++) {
        if(rankArr[j] === "") {
            txt.innerText = "All input fields are required";
            okay = false;
        }
        else {
            for (var k = j + 1; k < rankArr.length; k++) {
                if (rankArr[j] === rankArr[k]) {
                    txt.innerText = "There are duplicate values. Please change inputs accordingly";
                    okay = false;
                }
            }
        }
    }
    return okay;
}

/** Drag drop validation **/
function dragDropValidation() {
    var fruit1 = document.getElementsByClassName('fruitDrop');
    var err1 = document.getElementById('errMsg');
    err1.innerText = "";
    var okay = true;

    for(var i = 0; i < fruit1.length; i++) {
        if (fruit1[i].value === "" || fruit1[i].value === null) {
            err1.innerText = "All fields are required";
            okay = false;
        }
    }

    return okay;

}   //end of fruit validation

/** drag and drop validation for alternate format 2 **/
function dragDropNumberValidate() {
    var fruit2 = document.getElementsByClassName('fruits-2');
    var err2 = document.getElementById('errMsg-2');
    err2.innerText = "";
    var okay = true;

    for (var j = 0; j < fruit2.length; j++) {
        if(fruit2[j].value === "" || fruit2[j].value === null) {
            err2.innerText = "All fields are required";
            okay = false;
        }
    }

    return okay;

}
/** Validation for question 13 **/
function validateClickPhrases() {
    var input1 = document.getElementById('response');
    var input2 = document.getElementById('response-2');
    var input3 = document.getElementById('response-3');
    var input4 = document.getElementById('response-4');
    var input5 = document.getElementById('response-5');
    var input6 = document.getElementById('response-6');
    var input7 = document.getElementById('response-7');
    var ok = true;

    var err = document.getElementsByClassName('errorMsg');
    for(var i = 0; i < err.length; i++) {
        err[i].innerText = "";
    }

    if(input1.value === "" || input1.value === null) {
        document.getElementById('err1').innerText = "Please type a response";
        ok = false;
    }
    if(input2.value === "" || input2.value === null) {
        document.getElementById('err2').innerText = "Please type a response for second phrase";
        ok = false;
    }
    if(input3.value === "" || input3.value === null) {
        document.getElementById('err3').innerText = "Please enter in a response for the third phrase";
        ok = false;
    }
    if (input4.value === "" || input4.value === null) {
        document.getElementById('err4').innerText = "Please enter in a response for the fourth phrase";
        ok = false;
    }
    if(input5.value === "" || input5.value === null) {
        document.getElementById('err5').innerText = "Please enter in a response for fifth phrase";
        ok = false;
    }
    if(input6.value === "" || input6.value === null) {
        document.getElementById('err6').innerText = "Please enter a response for the sixth question";
        ok = false;
    }
    if(input7.value === "" || input7.value === null) {
        document.getElementById('err7').innerText = "Please enter a response for the seventh resposne ;"
        ok = false;
    }
    
    return ok;
}

/** validation for question 14 **/
function validateHeat() {
    var errs = document.getElementsByClassName('errorMsg');
    var ok = true;
    
    for(var i = 0; i < errs.length; i++) {
        errs[i].innerText = "";
    }
    var input1 = document.getElementById('response');
    var input2 = document.getElementById('response-2');
    var input3 = document.getElementById('response-3');

    if(input1.value === "" || input1.value === null) {
        document.getElementById('err1').innerText = "Please enter a response";
        ok = false;
    }
    if(input2.value === "" || input2.value === null) {
        document.getElementById('err2').innerText = "Please enter a response";
        ok = false;
    }
    if(input3.value === "" || input3.value === null) {
        document.getElementById('err3').innerText = "Please enter a response";
        ok = false;
    }
    

    return ok;
    
}

/** Checkbox grid validation - 05 **/
function checkboxGrid() {

    var err1 = document.getElementById('err-1');
    var err2 = document.getElementById('err2');
    var err3 = document.getElementById('err3');
    var success = true;

    var err = document.getElementsByClassName('errorMsg');
    for(var i = 0; i < err.length; i++) {
        err[i].innerText = "";
    }

    var ms1 = document.getElementById('wells-philanthropic');
    var ms2 = document.getElementById('other-philanthropic');
    var ms3 = document.getElementById('no-philanthropic');

    var ms4 = document.getElementById('wells-life');
    var ms5 = document.getElementById('other-life');
    var ms6 = document.getElementById('not-life');

    var ms7 = document.getElementById('wells-advisory');
    var ms8 = document.getElementById('other-advisory');
    var ms9 = document.getElementById('not-advisory');

    if(!ms1.checked && !ms2.checked && !ms3.checked) {
        err1.innerText = "Question 1 needs a response";
        success = false;
    }

    if (!ms4.checked && !ms5.checked && !ms6.checked ) {
        err2.innerText = "Question 2 needs a response";
        success = false;
    }

    if (!ms7.checked && !ms8.checked && !ms9.checked ) {
        err3.innerText = "Question 3 needs a response";
        success = false;
    }
    
    return success;
}


/** validate date picker **/
function validateDatePicker() {
    var err = document.getElementById('errMsg');
    err.innerText = "";
    var input = document.getElementById('datepicker').value;
    var success = true;
    var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    if (input === "" || input === null) {
        err.innerText = "You must select a date";
        success = false;
    }
    if (!input.match(re)) {
        err.innerText = "Incorrect date format. Please try again";
        success = false;
    }
    return success;
}   
