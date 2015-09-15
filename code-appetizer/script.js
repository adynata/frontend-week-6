/*

  Your Javascript here

*/
var allValues = [];


var addToFooDiv = function() {
    var currentValue = textInput[0].value;
    allValues.push(currentValue);
    var divContents = document.createTextNode;
    divContents = allValues.join(", ");
    var foo = document.getElementById("foo");
    console.log(foo);
    foo.innerText = divContents;
    console.log(allValues);
    textInput[0].value = "";
    changeColor();

};


function changeColor() {
  var foo = document.getElementById("foo");
  foo.style.background = bgColors[1];
  console.log("the current bg color is " + foo.style.background);
  console.log("first index place is " + bgColors[0]);

  shiftColors();
}

function shiftColors() {
  var shiftedColor = bgColors.shift(1);
  console.log(shiftedColor);
  console.log(bgColors);
  bgColors.push(shiftedColor);
  console.log(bgColors);
};

var bgColors = ["red", "cadetblue", "#3f3f3f"];


var textInput = document.getElementsByClassName("text-input");

document.getElementsByClassName("submit-button")[0].addEventListener('click', addToFooDiv);

console.log(document.getElementsByClassName("submit-button"));
