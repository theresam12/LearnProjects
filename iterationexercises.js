echo "# LearnProjects" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/theresam12/LearnProjects.git
git push -u origin master

// highestNumber exercise
var n = [4, 7, 9, 2, 3]

//need a function to take above array and return highest value

//function declaration
function highestNum(arr) {
  //create var called max and set to reasonable value
  var max = 0 //this number should change if a higher one exists

  arr.forEach(function(el) {
    if ( el > max ){
      max = el
    }
  })
  console.log(max)
}

highestNum(n)

//Lowest Number exercise

var n = [4, 7, 9, 2, 3]

function lowestNum(arr) {
  var min = 10000000000
  arr.forEach(function(el) {
    if ( el < min ){
      min = el
    }
  })
  console.log(min)
}

lowestNum(n)


//calculate sum
//need to fix!!
var n = [4, 7, 9, 2, 3]
var t = n.concat
  t.forEach(function (el){
    console.log(x+y+z);
})


  //Siblings names
var sib= ["Melissa", "Theresa", "Michael", "Erin"]
var par =["Lisa", "Jerry"]
//sort siblint list alphabetically
  sib.sort()

//sort parent list in reverse, alphabetically
var sib= ["Melissa", "Theresa", "Michael", "Erin"]
var par =["Lisa", "Jerry"]
  par.reverse()

//combine arrays into single array and sort all names in alphabetical order
//need to fix!!
var sib= ["Melissa", "Theresa", "Michael", "Erin"]
var par =["Lisa", "Jerry"]
var c = sib.concat(par)

  c.sort(function(element1, element2){
    return (element1 > element2)*1 + (element1<element2)*-1;
  });

  //sort all names in reverse abc order

  var sib= ["Melissa", "Theresa", "Michael", "Erin"]
  var par =["Lisa", "Jerry"]
  var c = sib.concat(par) //combines both lists as arrays,
  //if used sib.concat + par.concat it would combine as strings
    c.sort()
    c.reverse()



//Create a function that determines if a given name is amongst the names
function isName(names){
  var names =["Melissa", "Theresa","Michael","Erin","Lisa","Jerry"]
  var giveName = prompt("What's your name?") //makes a box pop up on the window
    if(names.lastIndexOf(giveName)<0){ //if name doesn't match would return a -1 in the array, so making it less than 0 returns a T/F kind of problem?
      alert("You Lose!") //alerts "you lose" if the name doesn't match
    } else {
      alert("You Win!")
    }
  }  isName() //runs functions

//was supposed to create function to give only even numbers in array
//this function prompts to give a number and tells if it is odd or even. Not only numbers in array
  function oddEven(n){
    var n=[1, 2, 3, 4]
    var giveNum = prompt("Give me a Number")
      if (giveNum % 2 == 0){ // % sign returns integers when dividing, no remainders
      alert("This is an Even Number")
    }
      else{
        alert("This is an odd number")
      }
  } oddEven()

//function to give only numbers in the array that are even

  function evenNum(numbers){
    var numbers=[1, 2, 3, 4]
      for (var i =0; i<numbers.length; i++){
        if(i % 2 ===0){
          numbers.push(numbers[i]); //having trouble with this line
        }

      }
  }  evenNum()


//function to give only numbers in array that are odd
function oddNum(numbers){
  var numbers= [1, 2, 3, 4]
   var filtered = numbers.filter(function(element, index, array){
    return (index % 2 === 1))}
}   oddNum()
