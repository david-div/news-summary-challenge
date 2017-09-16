
var test = function() {

  var button = document.getElementById('submit-button');
  var textField = document.getElementById('textField');
  var blogList = document.getElementById('blog-list');
  var testResult = document.getElementById('testResult');
  var fullNote = document.getElementById("full-note");

  var success = function () {
    console.log("%cTest passed", 'color:green');
    testResult.insertAdjacentHTML("beforeend", '<li style="color: green"> Test passed! </li>');
  };

  var fail = function () {
    console.log("%cTest failed", 'color:red');
    testResult.insertAdjacentHTML("beforeend", '<li style="color: red"> Test failed! </li>');
  };

  var reset = function() {
    blogList.innerHTML = ''
  };

  var testIfTrue = function(argument) {
    if (argument) {
      success();
    } else {
      fail();
    }
    reset()
  };

  var inputAndClick = function(text) {
    textField.value = text;
    button.click();
  };

  var buttonPresent = function() {
    testIfTrue(button);
  };

  var textInput = function() {
    textField.value = 'a';
    testIfTrue(textField.value === 'a');
  };

  var textFieldPresent = function() {
    inputAndClick('a');
    testIfTrue(blogList.innerHTML.includes('a'))
  };

  var postTextFeature = function() {
    inputAndClick('a');
    inputAndClick('b');
    testIfTrue(blogList.innerHTML.includes('a') && blogList.innerHTML.includes('b'))
  };

  var abbreviationTest = function() {
    str = 'Hello, this string is over 20 characters long!';
    inputAndClick(str);
    shortenedStr = 'Hello, this string i';
    appendedStr = "Hello, this string i" + '...';
    testIfTrue(blogList.innerHTML.includes(appendedStr));
  };

   var addsNewButtonWithId = function(){
     var string = 'any string more than 20 characters'
     inputAndClick(string);
     document.getElementById('note5').click();
     testIfTrue(fullNote.innerHTML.includes(string))
   };

   var hidesList = function() {
     var string = 'any string more than 20 characters'
     inputAndClick(string);
     document.getElementById('note6').click();
     testIfTrue(fullNote.innerHTML.includes(string) && blogList.style.display === 'none');
   };

  runTests = function() {
    buttonPresent();
    textFieldPresent();
    postTextFeature();
    textInput();
    abbreviationTest();
    addsNewButtonWithId();
    hidesList();
  };

  runTests()

};

test();
