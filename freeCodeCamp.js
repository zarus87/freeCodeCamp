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

    49. var myGlobal = 10;// Declare the myGlobal variable below this line.


    function fun1() {
      oopsGlobal = 5// Assign 5 to oopsGlobal Here.
    
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

  77. // Setup
  var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  
  var entreeValue = testObj["an entree"];   // Change this line
  var drinkValue = testObj["the drink"];    // Change this line

  78. // Setup
  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  
  var playerNumber = 16;       // Change this line
  var player = testObj[playerNumber];   // Change this line

  79. // Setup
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog["name"] = "Happy Coder";
  // Only change code below this line

  80. var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
   myDog.bark = "woof";

   81. // Setup
   var myDog = {
     "name": "Happy Coder",
     "legs": 4,
     "tails": 1,
     "friends": ["freeCodeCamp Campers"],
     "bark": "woof"
   };
   
   delete myDog.tails;// Only change code below this line

   82. // Setup
   function phoneticLookup(val) {
     var result = "";
   
     // Only change code below this line
     var lookup = {
       alpha:"Adams",
       bravo:"Boston",
       charlie:"Chicago",
       delta:"Denver",
       echo: "Easy",
       foxtrot:"Frank"
     }
   result = lookup[val]
     // Only change code above this line
     return result;
   }
   
   phoneticLookup("charlie");

   83. function checkObj(obj, checkProp) {
    // Only change code below this line
    if  (obj.hasOwnProperty(checkProp))
    {
      return obj[checkProp];
    } else 
    {return "Not Found";}
    // Only change code above this line
  }
  84. var myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true,
    },
      {
      "artist": "Sloipknot",
      "title": "IOWA",
      "release_year": 1999,
      "formats": [
        "CD",
        "8T",
        "LP",
        "DVD"
      ],
      "gold": true
      
    }
  ];

  85. var myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];

  86. var myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  var secondTree = myPlants[1].list[1];

  87. 

  88. var myArray = [];
  var i = 5;
  while(i > -1 ) {
    myArray.push(i);
    i--;
  }
  console.log(myArray)

  89. var myArray = [];
  for(var i = 1; i <6; i++) {
    myArray.push(i)
  }

   90. var myArray = [];
   for(var i = 1; i <10; i +=2) {
     myArray.push(i);
   }
   console.log(myArray)

   91. var myArray = [];
   for (var i =9; i >0; i-=2 ) {
     myArray.push(i)
   }
   console.log(myArray)

   92. var myArr = [ 2, 3, 4, 5, 6];
   var total = 0;
   for (var i = 0; i < myArr.length; i++) {
     total += myArr[i];
   }

   93. function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for (var i = 0; i < arr.length; i++){
    for (var j= 0; j <arr[i].length; j++) {
      product *= arr [i][j]
    }
  }
    // Only change code above this line
    return product;
  }
  console.log()
  multiplyAll([[1,2],[3,4],[5,6,7]]);

  94. // Setup
  var myArray = [];
  var i = 10;
  
  // Only change code below this line
  do   {
    myArray.push(i);
    i++;
  
  
  }while (i < 5);

  95. 


  100. function convertToInteger(str) {
    return parseInt(str);                  //ParseInt преобразует в целое число
    }
    
    convertToInteger("56");
    console.log(convertToInteger)

  101. function convertToInteger(str) {
    return parseInt (str,2);     //можно преобразовавыть из системы счисления одной в другую. желаемая сисстема счисления указывается через запятую после числа
    }
    
    convertToInteger("10011");
    console.log(convertToInteger)

  102. function checkEqual(a, b) {
    return a===b ? "Equal" : "Not Equal";  // здесь нужно строгое равенство именно три с одним не возвращает ответ "нет"
    }
    
    checkEqual(1, 2);
    console.log(checkEqual)

  103.; function checkSign(num) {
  return (num > 0) ? "positive" 
  : (num < 0) ? "negative"
   : "zero";                               // этот код реально не работает в браузере,, но задание правильно считается в кодкэмпе
  }
    checkSign(10);
  104.








  // Раздел ES6

  
  1. let catName;
  let quote;
  function catTalk() {
    "use strict";
  
    catName = "Oliver";
    quote = catName + " says Meow!";
  
  }
  catTalk();

  2. function checkScope() {
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
 3. function printManyTimes(str) {

  // Only change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // Only change code above this line

}
printManyTimes("freeCodeCamp");

4. const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

5. function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

6. const magic = () =>
new Date();

7. const myConcat = (arr1, arr2) =>
arr1.concat(arr2);


console.log(myConcat([1, 2], [3, 4, 5]));

8. // Only change code below this line
const increment = (number = 1, value = 1) => number + value;
// Only change code above this line

9. const sum = (...args) => {
  
  return args.reduce((a, b) => a + b, 0);
}
10. const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

11. const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;


// Only change code above this line

12. const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES; 

// Only change code above this line

13. const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low:lowToday, high: highToday}} = LOCAL_FORECAST;

14. let a = 8, b = 6;
[b,a] = [a,b];

15. const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr] = list; // записью в скобках присваиваю 1 это а, 2 это b, запись ...arr даю понять что всё остальное в куче выводиться при запросе!
// Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);

16. const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};


const half = ({max, min}) => (max+min) /2;  //как параметры max и min попадают из константы stats попадают в  константу half совершенно не понятно!


17.const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  "use strict";
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
     
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
console.log(failuresList)

18. const createPerson = (name, age, gender) =>( {
  // Only change code below this line
  name, age,gender                   // сокращёный вид написания без return 
  // Only change code above this line
});

19. // Only change code below this line
const bicycle = {
  gear: 2,
  setGear(newGear) {   // когда функция находиться в переменной то можно удалить само слово function и двуеточие перед ней!
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

20. // Only change code below this line
class Vegetable {
  constructor(name){   // необходимо испрользовать name здесь и далее это важно, с другими словами не работает
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); 

21. // Only change code below this line
class Thermostat {
  constructor(far){
   this.far = far;
  }

  get temperature() {
    return 5/9 * (this.far - 32);  // перевод в цельсии
  }

  set temperature(celsius) {
        this.far = celsius * 9.0 / 5 + 32; // перевод в фаренгейт
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // задаём градусы фаренгейта
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp)
thermos.temperature = 26;    
temp = thermos.temperature; // 26 in Celsius
console.log(temp)

22. <html>
  <body>
    <!-- Only change code below this line -->
<script type="module" src="index.js"></script>  // подключаем фва скрипт из внешнего файла
    <!-- Only change code above this line -->
  </body>
</html>

23. const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}
export {uppercaseString, lowercaseString};   // экспорт переменных в другой файл

24.  import {uppercaseString, lowercaseString} from './string_functions.js'; // импорт из другого файла
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");

25. import * as stringFunctions from './string_functions.js'  // импорт всего файла в одну переменную
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

26. export default function subtract(x, y) {   //экспортирование по умолчанию, можно использовать для одной вещи в файле, нельзя использовать для val let const
  return x - y;
}

27.  import subtract from './math_functions.js'  // тоже импортиз файла
// Only change code above this line

subtract(7,4);

28. const makeServerRequest = new Promise((resolve, reject) => {   // обещания или промисы, сначала значение если правда потом значение если ложь

});

29. const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve('We got the data');// строка которая выводитсья когда промив истинный
  } else {  
    reject("Data not received");// строка когда промис ложный
  }
});

30. const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {   //метод для мгновенного использования  при положительном ответе промиса  нужно писать .then если ответ положительный
  console.log(result)
});

31. const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {    //   .catch если промис не выполнен
  console.log(error);
}); 


// Раздел Регулярные выражения


1. let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 
console.log(result)// Change this line

2. let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
console.log(result)

3. let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // через знак | можно перебирать варианты слов при поиске по шаблону
let result = petRegex.test(petString);
console.log(result)

4. let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; // i - позваляет игнорировать пробелы и регистр при поиске
let result = fccRegex.test(myString);
console.log(result)

5. let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(/coding/); // .match повазяет извлечь слово которое совпадает (если без него ответ будет просто да или нет)

6. let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // ключ g позваляет искать и выводить все совпадения!
let result = twinkleStar.match(starRegex); // Change this line
console.log(result)

7. let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line   символ "." соответсвует символу который я не знаю, но она будет искать все комбинации. а вместо "." любой символ
let result = unRegex.test(exampleStr);

8. let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // [] позваляют искать слова в которых есть такие буквы, если перед и за скобками стоят буквы которые должны точно совпасть
let result = quoteSample.match(vowelRegex); // Change this line
console.log(result)

9. let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Если писать через пробел то будут перебираться все буквы от и до
let result = quoteSample.match(alphabetRegex); // Change this line

10let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
console.log(result)

11. let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi; // ^ позволяет находить всё крове того что за этим знаком, той есть как бы инверсия
let result = quoteSample.match(myRegex); 

12. let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // благодаря знаку + я могу искать двойные буквы, или все буквы которые есть
let result = difficultSpelling.match(myRegex);
console.log(result)

13. // Only change code below this line
let chewieRegex = /Aa*/; // * искать подобные все буквы!
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

14.  let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // ленивое сопостовление, не особо понятно что это такое
let result = text.match(myRegex);
console.log(result)

15. let reCriminals = /C+/; // + показывает что необходимо искать все подобные символы сколько бы из небыло
console.log(reCriminals)

16. let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // находим слово в начале строки
let result = calRegex.test(rickyAndCal);
console.log(result)

17. let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // находим слово в конце строки
let result = lastRegex.test(caboose);
console.log(result)

18. let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // \w подставляет все буквы и цифры и символы чтобы их искать
let result = quoteSample.match(alphabetRegexV2).length; // здесь мы их считаем
console.log(result)

19. let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // заглавная буква позволяет искать инвертированые символы
let result = quoteSample.match(nonAlphabetRegex).length;
console.log(result)

20. let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // позволяет находить все цифры 0-9
let result = movieName.match(numRegex).length;
console.log(result)

21. let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/gi; // находим всё что не является цифрами 0-9
let result = movieName.match(noNumRegex).length;
console.log(result)

22. let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi; // Это задача, её я скопировал с ответа)) так как не особо понял условия переведённые мною с английского
let result = userCheck.test(username);
console.log(result)

23. let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // этот патерн позваляет искать пробелы в выражении
let result = sample.match(countWhiteSpace);
console.log(result)

24. let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // заглавная буква S позваляет искать все непробельные символы
let result = sample.match(countNonWhiteSpace);
console.log(result) 

25. let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}\sno/gi; // {} позваляет искать количество совпадений буквы первая цифра от скольки, вторая до скольки(в примере исчем буквы h)
let result = ohRegex.test(ohStr);
console.log(result)

26. let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // если не указать одну цифру в скобках то она не будет учитывать либо нижний предел либо верхний
let result = haRegex.test(haStr);

27. let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Если нету запитых в скобках, то мы указываем точное количество совпадений которое нам надо
let result = timRegex.test(timStr);

28. let favWord = "favorite";
let favRegex = /favou?rite/; // ? при поиске точного совпадения может указать необязательность буквы перед которой он стоит, тут допустим разные английские британский и американский, и u не особо влияет, а смвсл слова один и тот же
let result = favRegex.test(favWord);

29. let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // длина слова 6 символов последние две только цифры
let result = pwRegex.test(sampleWord);

30. let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin *D.) Roosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result)

31. let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // \1 это повторение искомого числа в этос лучае повторяем ещё два раза запись ^(\d+) итого в результате будет три повторения, третья это сама запись
let result = reRegex.test(repeatNum);
console.log(result)

32. let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // каждые скобки соответсвуют слову
let replaceText = "$3 $2 $1"; //  меняем слова местами three two one
let result = str.replace(fixRegex, replaceText);
console.log(replaceText)

33. let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // удаляем все прбелов до и после слов
console.log(result)


  // Раздел Отладка

  1. let a = 5;
  console.log(a) // учимся подставлять console.log там где нам надо посмотреть результат
  let b = 1;
  a++;
  let sumAB = a + b;
  console.log(sumAB);
  
  2. let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
  console.log(output)  // какая-то разница в консолях сайта и браузера. непонятно
  console.clear()
  
  3. let seven = 7;
  let three = "3";
  console.log(typeof three);
  console.log(typeof seven);// проверка типа данных с которыми имеем дело!
  
  4. let receivables = 10;
  let payables = 8;
  let netWorkingCapital = receivables - payables;
  console.log(`Net working capital is: ${netWorkingCapital}`);// исправлены две ошибки в переменных чтобы всё работало )
  
  5. let myArray = [1, 2, 3];
  let arraySum = myArray.reduce((previous, current) =>  previous + current);
  console.log(`Sum of array values is: ${arraySum}`);  // исправлены некоторые ошибки в написании чтобы код работал!
  
  6. let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>"; // одинарные и двойные ковычки и использование их в одной строке
  console.log(innerHtml);
  
  7. let x = 7;
  let y = 9;
  let result = "to come";
  
  if(x == y) {             // здесь мы добавили двойное равно, ведь если его нету то цикл else никогда не будет выполняться
    result = "Equal!";
  } else {
    result = "Not equal!";
  }
  
  console.log(result);
  
  8. function getNine() {
    let x = 6;
    let y = 3;
    return x + y;
  }
  
  let result = getNine();  // здесь после названия функции забыли написать скобки! и переменная не воспринимало это как функцию
  console.log(result);
  
  9. function raiseToPower(b, e) {
    return Math.pow(b, e);
  }
  
  let base = 2;
  let exp = 3;
  let power = raiseToPower(base, exp); // здесь была неправильная последовательность передачи значений в функцию, и как следствие ответ был не тот который ждали
  console.log(power);
  
  10. function countToFive() {
    let firstFive = "12345";
    let len = firstFive.length;
    // Only change code below this line
    for (let i = 0; i < len; i++) {    // здесь была ошибка знаков и цифр функцию стартовала с 1 а не с 0 как положено и выполняла на 1 обход больше чем должна из за знака =
      console.log(firstFive[i]);
    }
  }
  countToFive();
  
  11. function zeroArray(m,n) {  
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
   
    for (let i = 0; i < m; i++) {
      // Adds the m-th row into newArray
   let row = [];                                // здесь я должен был понять что переменная должна быть внутри цикла, а она юыла снаружи. не понял этого
      for (let j = 0; j < n; j++) {
        // Pushes n zeroes into the current row to create the columns
        row.push(0);
      }
     
      // Pushes the current row, which now has n zeroes in it, to the array
      newArray.push(row);
      
    }
     
    return newArray;
  }
  
  let matrix = zeroArray(4,3);
  console.log(matrix);
  
  12. function myFunc() {
    for (let i = 1; i <= 4; i += 2) {    // изменил знак ! на < чтобы получить конечный цикл а не бесконечный
      console.log("Still going!");
    }
  }





// Раздел базовые структуры даных

1. let yourArray = [4,6,42,"dfgdfgg", true]; // просто дописал массив с несколькими типами данных

2. let myArray = ["a", "b", "c", "d"];
myArray[1] = "fuck"                 // здесь я изменил значения массива таким оброзом!
console.log(myArray);

3. function mixedNumbers(arr) {
arr.unshift('I',2, 'three');        // добавление в начало массива
arr.push(7, 'VIII', 9);             // добавление в конец массива
  return arr;
}

4.  function popShift(arr) {
  let popped = arr.pop(); // добавляю последний элемент
  let shifted = arr.shift(); // добавляю первый элемент
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));  

5. const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(2,2);  // splice позваляет удалять из массива первая цифра это с какой цифры начнётся удаление вторая сколько цифр будет удалено
arr.splice(1,2);
// Only change code above this line
console.log(arr);

6.  











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

  7. function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    
    let terrier = new Dog("zxx","qwe");
    console.log(terrier)

    8. function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
     let myHouse = new House(4);
    
     myHouse instanceof House   // instanceof проверяет является ли myHouse изменёным элементом House

     9. function Bird(name) {
      this.name = name;
      this.numLegs = 2;
    }
    
    let canary = new Bird("Tweety");
    let ownProps = [];
    
    for (let property in canary) {
      if(canary.hasOwnProperty(property)) {     // этот код позваляет передать в массив все своисва переменноой canary
        ownProps.push(property);
      }
    }

    10.   function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;   // в этой строке добавляем свойства обьекту Dog
    

    let beagle = new Dog("Snoopy");

    11.   function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;
    
    let beagle = new Dog("Snoopy");
    
    let ownProps = [];
    let prototypeProps = [];
    
    for (let property in beagle) {
      if(beagle.hasOwnProperty(property)) {    // добавялем все свойства beagle хз куда
        ownProps.push(property);
      } else {
        prototypeProps.push(property);
      }
    }
  

  12.  function Dog(name) {
    this.name = name;
  }
  
  
  function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {                // с помощью .construсtor проверяем является ли точное соответсвие candidate === Dog
      return true;
    } else {
      return false;
    }
  }

  13.   function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {                          // устанавливаем несколько свойств к обьекту Dog за один раз
    
  numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  
  14. function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype = {
    constructor: Dog,         // чтобы в будущем нельзя было сменить имя, мы определяем его этим свойством, или что-то в этом роде )
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  15. function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);   // с помощью isPrototypeOf проверяем что beagle это изменёный Dog.

  16. function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);  
  Object.isPrototypeOf(Dog.prototype);  

  17. function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat,
  
  };
  
  function Bear() { }
  
  Bear.prototype = {
    constructor: Bear,
   
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
  eat: function () {        // добавил тут  типа чтобы не повторяться что-то.
    console.log("ho-ho-ho")
  }
  };
  
   18.   function Animal() { }

   Animal.prototype = {
     constructor: Animal,
     eat: function() {
       console.log("nom nom nom");
     }
   };
   let duck = Object.create(Animal.prototype);    // создаю обьект и даю ему свойства прототипа, с наследованием
   let beagle = Object.create(Animal.prototype);

   19. function Animal() { }

   Animal.prototype = {
     constructor: Animal,
     eat: function() {
       console.log("nom nom nom");
     }
   };
   
   function Dog() { }
   let beagle = new Dog();
   Dog.prototype = Object.create(Animal.prototype);  // все Dog наследуют свойства Animal

   20.  function Animal() { }
   function Bird() { }
   function Dog() { }
   
   Bird.prototype = Object.create(Animal.prototype);
   Dog.prototype = Object.create(Animal.prototype);
   
   // Only change code below this line
   Bird.prototype.constructor = Bird;    // меняю своиство прототипа вручную
   Dog.prototype.constructor = Dog;
   
   let duck = new Bird();
   let beagle = new Dog();

   21. function Animal() { }
   Animal.prototype.eat = function() { console.log("nom nom nom"); };
   function Dog() { }
   Dog.prototype = Object.create(Animal.prototype);
   Dog.prototype.constructor = Dog;
   
   Dog.prototype.bark = function() {
     console.log("Woof!");
   };
   let beagle = new Dog();

   22. function Bird() { }

   Bird.prototype.fly = function() { return "I am flying!"; };
   
   function Penguin() { }
   Penguin.prototype = Object.create(Bird.prototype);
   Penguin.prototype.constructor = Penguin;
   
   // Only change code below this line
   Penguin.prototype.fly = function() {
     return "Alas, this is a flightless bird.";  // изменяю унаследованые свойства
   };
   // Only change code above this line
   
   let penguin = new Penguin();
   console.log(penguin.fly());

   23. let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Only change code below this line
  let glideMixin = function(obj) {     //связываю две переменные одним свойством с помощью Mixin
    obj.glide = function() {
     
    }
  };
  glideMixin(bird);
  glideMixin(boat);

  24. function Bird() {
    let weight = 15
    this.getWeight = () => weight; //применя. замыкание чтобы защитить weight от прямого переназначения
  }

  25. (function () {
    console.log("A cozy nest is ready");
  })();                                  //синтаксис немедленно вызываемой ананимной функции

  26. let funModule = (function () {
    return{
     isCuteMixin : function(obj) {
    obj.isCute = function() {
      return true;
    };
  },
      singMixin : function(obj) {
    obj.sing = function() {
      console.log("Singing to an awesome tune");
      };
      }
  };
  })();


  function mixedNumbers(arr) {
    // Only change code below this line
  arr.unshift('I',2, 'three');
  arr.push(7, 'VIII', 9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));