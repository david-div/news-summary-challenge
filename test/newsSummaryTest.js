
var test = function() {

  var blogList = document.getElementById('blog-list');

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

  runTests = function() {
  };

  runTests()

};

test();
