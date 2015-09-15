/*

  Your Javascript here

*/

var addToFooDiv = function() {
    var currentValue = textInput[0].value;
    var allValues = [];
    allValues.push(currentValue);
    var divContents = document.createTextNode;
    divContents = allValues.join(", ");
    var foo = document.getElementsByClassName("foo")[0]
    foo[0].appendChild(divContents);
    console.log(allValues);
    textInput[0].value = "";

};

var textInput = document.getElementsByClassName("text-input");

document.getElementsByClassName("submit-button")[0].addEventListener('click', addToFooDiv);

console.log(document.getElementsByClassName("submit-button"));
