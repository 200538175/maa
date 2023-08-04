

// Getting references foo the buttons:
var sendButton = document.getElementById("sendButton");

var calculateButton = document.getElementById("calculateButton");

var dark = document.getElementById("dark");
var light = document.getElementById("light");



// Adding event listeners for light or dark modes:
dark.addEventListener("click", function() {
  document.body.classList.remove("light");
  document.body.classList.add("dark");
});

light.addEventListener("click", function() {
  document.body.classList.remove("dark");
  document.body.classList.add("light");
});


function myExcelFuns() {
  // Getting the user input 
  var numStr = document.getElementById("numbers").value;

  // Checking if the user has inserted valid input
  if (numStr.trim() === "") {
    alert("Please enter valid numbers!");
  } else {
    // Remove extra spaces before and after the user input
    numStr = berStr.trim();

    // Convert the string user input into an array of numbers
    var numArr = numStr.split(" ");

    // Create a new array, finalNumericArray, to store the cleaned and parsed numbers
    var finalNumericArray = [];

    // Iterate through each element in the numberArr
    for (var i = 0; i < numberArr.length; i++) {
      // Remove any spaces in between the numbers
      var cleanedNumber = numArr[i].replace(/\s/g, "");

      // Convert the numeric value from string data type to number data type
      var parsedNumber = parseFloat(cleanedNumber);

      // Check if the current element is a number and not empty/space
      if (!isNaN(parsedNumber)) {
        finalNumericArray.push(parsedNumber);
      }
    }

    var result;
  


    if (document.getElementById("autosum").checked) {
      // Calculate the sum of the numbers
      result = finalNumericArray.reduce(function (a, b) {
        return a + b;
      }, 0);
    } else if (document.getElementById("average").checked) {
      // Calculate the average of the numbers
      var sum = finalNumericArray.reduce(function (a, b) {
        return a + b;
      }, 0);
      result = sum / finalNumericArray.length;
    } else if (document.getElementById("max").checked) {
      // Max number
      result = Math.max(...finalNumericArray);
    } else {
      // Min Number
      result = Math.min(...finalNumericArray);
    }

    console.log(result);
    var resultElement = document.getElementById("excelResult");
    resultElement.textContent = result;

}}



function userForm() {
    // Get the form inputs by IDs
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var province = document.getElementById("province").value;
    var membership = document.querySelector('input[name="membership"]:checked').value;
  
    // Create a joint-string:
    var userInfo = "Full Name: " + firstName + " " + lastName + "<br>" +
                   "Email: " + email + "<br>" +
                   "Address: " + address + "<br>" +
                   city + ", " + province + "<br>" +
                   "Membership: " + membership;
  
    var outputElement = document.getElementById("result");
    outputElement.innerHTML = userInfo;
  }


  //SOLVING AN ERROR USING TRY AND CATCH
try{  

  // EVENT LISTENERS:
sendButton.addEventListener("click", userForm);
}
catch(err){
calculateButton.addEventListener("click",myExcelFuns);
}




  