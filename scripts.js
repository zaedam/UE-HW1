var precincts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var precinct_found = true;
var precinct_avail;

function checkRegistrationCode() {
    var registrationcode = document.getElementById("registrationCodeInput").value;
    if (registrationcode == '19kjjna*&D389js09AFJ4%^olr2w43o9ia')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode != '19kjjna*&D389js09AFJ4%^oIr2w43o9ia')
        document.write("Oops, that's not a valid registration code. Please try again");
    else
        window.location.href = './choosefavactivity.html';
}
function buzzfeedredirect(direction) {
    if (direction == 'next')
        window.location.href = './selectprecinct.html';
    else if (direction == 'back')
        window.location.href = './bannerads.html';
}

function precinctClick(num) {
    const index = precincts.indexOf(num);
    var len = precincts.length;
    console.log(len);

    if ((index > -1) && (len == 1)) {
        precincts.splice(index, 1);
        precinct_avail = num;
    }
    else if ((index > -1))
        precincts.splice(index, 1);
    if ((len <= 1) && (precinct_avail == num)) {
        if (confirm('This precinct is not empty. Do you want to look for another location?')) {
            console.log('do nothing');
        }
        else
            window.location.href = './finalform.html';
    }
    else   
        alert("Sorry, this precinct is full. Please choose another location.");
}

function submitFinalForm() {
    var formValid = true;
    if (document.forms["finalForm"]["firstname"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["lastname"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["email"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["phone"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["street"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["city"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["gender"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["state"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["country"].value != 'US') {
        document.getElementById("finalFormErrors").innerHTML = "You're not in " + document.forms["finalForm"]["country"].value + ". Please select the correct country.";
        formValid = false;
    } if (!document.forms["finalForm"]["email"].value.includes("@")) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter a valid email.";
        formValid = false;
    } if (!document.forms["finalForm"]["email"].value.includes(".com") && !document.forms["finalForm"]["email"].value.includes(".edu") && !document.forms["finalForm"]["email"].value.includes(".io") && !document.forms["finalForm"]["email"].value.includes(".net") && !document.forms["finalForm"]["email"].value.includes(".org")) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter a valid email.";
        formValid = false;
    } if (isNaN(document.forms["finalForm"]["phone"].value) == true) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter only digits for your phone number.";
        formValid = false;
    } if (!document.forms["finalForm"]["phone"].value.length == 10) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter your US phone number.";
        formValid = false;
    }

    if (formValid) {
        window.location.href = './done.html';
    }

}