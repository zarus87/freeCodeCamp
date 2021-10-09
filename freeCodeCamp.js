//В этом файле указаны все мои решения в курсу "JavaScript алгоритмы и структуры данных" на freeCodeCamp!


1.// Это первый вид комментария 
/*Это второй вид комментария */

2. var myName;

3.var a;
a = 7;

4.var a;
a = 7;
var b;
b = a;

5. var a = 9;

6. var a = 5;
var b = 10;
var c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

7. var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

8. var sum = 10 + 10;

9. var difference = 45 - 33;

10. var product = 8 * 10;

11. var quotient = 66 / 33;

12. var myVar = 87;

// Only change code below this line
myVar++;

13. var myVar = 11;

// Only change code below this line
myVar--;

14. var myDecimal = 5.7;

15. var product = 2.5 * 2.0;

16. var quotient = 4.4 / 2.0; // Change this line

17. var remainder = 11 % 3;

18. var a = 3;
var b = 17;
var c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

19. var a = 11;
var b = 9;
var c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

20. var a = 5;
var b = 12;
var c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

21. var a = 48;
var b = 108;
var c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;

22. var myFirstName = 'Кирилл';
var myLastName = 'Круковский';

23. var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

24. var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

25. var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"// Change this line

26. var myStr = "This is the start. " + "This is the end." 
console.log(myStr);
// Change this line

27. // Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

28. // Only change code below this line
var myName = "Кирилл";
var myStr = "My name is " + myName + " and I am well";

29. var someAdjective = "qwe";
var myStr = "Learning to code is ";
myStr += someAdjective;

30. // Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line

lastNameLength = lastName.length;

31. // Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

32. // Setup
var myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

33. // Setup
var lastName = "Lovelace";

// Only change code below this line
var thirdLetterOfLastName = lastName[2]; // Change this line

34. // Setup
var lastName = "Lovelace";

// Only change code below this line
var lastLetterOfLastName = lastName[lastName.length -1]; // Change this line

35. // Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length -2]; // Change this line

36. var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = myAdjective + " " + "!" + myNoun  +  " " + myAdverb + " " + myVerb + " "; // Change this line
// Only change code above this line

37. var myArray = ["dsf", 2];

38. // Only change code below this line
var myArray = [["Bulls", 23], ["White Sox", 45]];

39. var myArray = [50,60,70];
var myData = myArray[0];

40. // Setup
var myArray = [18,64,99];
myArray[0] = 45
// Only change code below this line

41. var myArray = 
[[1,2,3],
 [4,5,6], 
 [7,8,9], 
 [[10,11,12], 
 13, 14]];

var myData = myArray[2][1];

42. // Setup
var myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3]);// Only change code below this li

43. // Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray = myArray.pop();

44. // Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
var removedFromMyArray = myArray.shift();

45. // Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

// Only change code below this line

46. var myList = [
  ["chocolate", 5],
  ["ovsanka", 1],
  ["grechka", 3],
  ["tvorog", 2],
  ["sir", 1]
  
  ];

  47. function reusableFunction() {
    console.log ("Hi World");
    }
    reusableFunction();

    48. function functionWithArgs(wer,dfg) {
  
      console.log(wer+dfg);
    }
    
    functionWithArgs(3,4);

    49. var myGlobal = 10;// Declare the myGlobal variable below this line


    function fun1() {
      oopsGlobal = 5// Assign 5 to oopsGlobal Here
    
    }
    
    // Only change code above this line
    
    function fun2() {
      var output = "";
      if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
      }
      console.log(output);
    }

    50. function myLocalScope() {

      var myVar = "внутри"// Only change code below this line
    
      console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    
    // Run and check the console
    // myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);

    51. // Setup
    var outerWear = "T-Shirt";
    
    function myOutfit() {
      // Only change code below this line
    var outerWear = "sweater";
    
    
      // Only change code above this line
      return outerWear;
    }
    
    myOutfit();

    52. function timesFive(num) {
      return num * 5;
    }
 53. // Setup
 var sum = 0;
 
 function addThree() {
   sum = sum + 3;
 }
 
 // Only change code below this line
 function addFive(){ 
   sum = sum +5;
 }
 // Only change code above this line
 
 addThree();
 addFive();
 
 54. // Setup
 var processed = 0;
 
 function processArg(num) {
   return (num + 3) / 5;
 }
 processed = processArg(7);
 // Only change code below this line

 55. function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);
  return arr.shift();

  return item;
  // Only change code above this line
  

}

// Setup
var testArr = [1,2,3,4,5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

56. function welcomeToBooleans() {

  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

57. function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if(wasThatTrue) {
  return "Yes, that was true";
} 
return "No, that was false";

  // Only change code above this line

}

52. // Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10);

53. // Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);

54. // Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

55. // Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

56. // Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

57. function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

58. function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >=10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

59. function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

60. function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

61. function testLogicalAnd(val) {
  // Only change code below this line

  
    if (val >=25 && val <= 50) {
      return "Yes";
    }
  

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

62. function testLogicalOr(val) {
  // Only change code below this line

  

  if (val >20 ||  val <10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

63. function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

64. function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  } else {

  return "Between 5 and 10";}
}

testElseIf(5);

65. function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

66. function testSize(num) {
  // Only change code below this line
if (num <5) {
  return "Tiny"
} else if  (num < 10) {
   return "Small"
} else if (num <15) {
  return "Medium"
} else if (num <20) {
  return "Large"
} else (num >= 20) ;{
  return "Huge"
}

  return "Change Me";
  // Only change code above this line
}

67. var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
if (strokes == 1) {
  return names[0]
} else if (strokes <= par - 2) {
  return names[1]
} else if (strokes == par - 1) {
  return names[2]
} else if (strokes == par) {
  return names[3]
} else if (strokes == par + 1) {
  return names[4]
} else if (strokes == par + 2) {
  return names[5]
} else  (strokes >= par + 3); {
  return names[6]
} 


  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

68.  
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
switch(val) {
case 1 :
answer = "alpha";
break;
case 2:
answer = "beta";
break;
case 3:
answer = "gamma";
break;
case 4:
answer = "delta";
break;

}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

69. function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
switch (val){
  case "a":
  answer = "apple";
  break;
  case "b":
  answer = "bird";
  break;
  case "c":
  answer = "cat";
  break;
  default :
  answer = "stuff";
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

70. function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
switch (val){
  case 1:
  case 2:
  case 3:
  answer = "Low";
  break;
  case 4:
  case 5:
  case 6:
  answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  answer = "High";
  break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

71. function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line

  switch(val) {
   case "bob":
    answer = "Marley";
    break;
   case 42: 
    answer = "The Answer";
    break;
  case 1:
    answer = "There is no #1";
    break;
  case 99:
    answer = "Missed me by this much!";
    break;
  case 7:
    answer = "Ate Nine";
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

72. function isLess(a, b) {
  // Only change code below this line
  
    return a < b;
 
  // Only change code above this line
}

isLess(10, 15);

73. // Setup
function abTest(a, b) {
  // Only change code below this line
if (a<0 || b<0){
  return undefined
}


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

74. var count = 0;

function cc(card) {
  // Only change code below this line
switch (card) {
case 2:
case 3:
case 4:
case 5:
case 6:
   count++;
   break;
   case 10:
   case "J":
   case "Q":
   case "K":
   case "A":
   count--;
   break;
}
var holdbed = "Hold";
if (count > 0){
  holdbed = "Bet"
} 
  return count + " " + holdbed;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

75. var myDog = {
  // Only change code below this line
  "name" : "asd",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["sdfs", "sfsd"]
  
  // Only change code above this line
  };

  76. // Setup
  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  
  var hatValue = testObj.hat;      // Change this line
  var shirtValue = testObj.shirt;    // Change this line

  77. 




// Раздел Обьектно ориентированного программирования

1. let dog = {
    name: "floki",
    numLegs: 4
    };

2. let dog = {
    name: "Spot",
    numLegs: 4
  };
  console.log(dog.name, dog.numLegs)    

3. let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() { 
    return "This dog has " + dog.numLegs + " legs.";
  }
  };
  
  dog.sayLegs();

  4. let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  5. function Dog () {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

  6. function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog()

  7. 
