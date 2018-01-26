//*****Practice*****

// var nameChanger = function(){
//   name = "Tom";
//   name2 = "Jerry";
//   globe = "John";
// }
//
//
// console.log(name);
// console.log(name2);
// console.log(globe);
//
//
// var nameChanger = function(){
//   name = 1;
//   name1 = 2;
//   var name2 ="Jerry";
//   // return name;
//   // return name2;
//   console.log(name,name1,name2)
// }
//
//
//
// //
// // function nameChanger(){
// //   name = "Tom";
// //   var name2 = "Jerry";
// // }
//
// nameChanger();
// console.log(name);
// console.log(name1);

//*****Car Object Challenge*****
//_____________________________TRY 1_________________________
// var car = {
//   make: "Honda",
//   model: "Civic",
//   year: 2017,
//   color:"black"
//   getData: function(carDescriptor){
//     return this.make,this.model,this.year,this.color
// }  car.getData();
//
// var car1 = ("Honda", "Civic", 2017, "black")
// function newCar(newMake,newModel,newYear,newColor){
//   return{
//
//     function(){
//       return this.make,this.model,this.year,this.color
//     }
//   };
// }

//_____________________________SUCCESS!_________________________

// function createNewCar(newMake,newModel,newYear,newColor) {  // begin createNewPerson
//   return {                        // begin object
//     make: newMake,
//     model: newModel,
//     year: newYear,
//     color: newColor,
//     getData: function() {         // begin function
//       return this.make+"-"+this.model+"-"+this.year+"-"+this.color
//     }                             // end function
//   };                              // end object
// }
//
// var car = createNewCar("Honda","Tundra",2018,"Black")
// console.log(car.getData())

//*****Object Oriented Password Checker*****

// You are writing the user registration page for a secure web site, and user credentials must adhere to the following criteria:
//
// A. User ID and password have to be at least six characters long.
//
// B. User ID cannot contain the following characters: #$
//
// C. Password has to contain at least one of: #$


// var inputCredentials = prompt("Input your Credentials")
// var user1 =("makeMoney","password$")

var isUserIdValid = function(){
  var userID = prompt ("Input User ID")
  if (userID.length > 6 && !userID.includes("#") && !userID.includes("$")) {
    return true
    // alert("Valid User ID");
  } else {
      // alert("Invalid User ID")
    return false
  }
}
var isPasswordValid = function(){
  var password = prompt ("Input Password")
  if (password.length > 6 && password.includes("#") || password.includes("$")) {
    return true
      // alert ("Valid Password, Enter Password Again");
  } else {
    return false
      // alert("Invalid Password, Try Again.")
    }
}

function areCredentialsValid() {
  if (isUserIdValid() && isPasswordValid()){
  alert("Credentials Accepted");
}  else {
  alert("Invalid Credentials")
}
};
areCredentialsValid()


//
// var isUserIdValid = function(){
//   var userID = prompt ("Input User ID")
//   if (userID.length > 6 && !userID.includes("#") && !userID.includes("$")) {
//     alert ("Valid User ID, Enter Password");
//   } else {
//     alert ("Invalid User ID, ");
//   }
// } isUserIdValid()
// isUserIdValid()


var isPasswordValid = function(){
  var password = prompt ("Input Password")
  if (password.length > 6 && password.includes("#") || str.includes("$")) {
    prompt("Valid Password, Enter Password Again");
}   else {
      prompt("Invalid Password, Try Again.")
    }
}

var areCredentialsValid = function(){
  var credentials = prompt ("Input Password")
  if (password.length > 6 && password.includes("#") || str.includes("$")) {
    alert("Valid Password");
}   else {
      alert("Invalid Password")
    }
}

function areCredentialsValid(id, pass) {
  return isUserIdValid(id) && isPasswordValid(pass);
  if (true) {
  alert("Credentials Accepted");
}  else {
    alert("Invalid Credentials")
}
};
areCredentialsValid(userId, userPw);


var = {userId: "makeMoney", userPw: "password$"}
