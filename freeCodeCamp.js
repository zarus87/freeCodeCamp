//В этом файле указаны все мои решения в курсу "JavaScript алгоритмы и структуры данных" на freeCodeCamp!


1.
// Это первый вид комментария 
/*Это второй вид комментария */

2.
var myName;

3.
var a;
a = 7;

4.
var a;
a = 7;
var b;
b = a;

5.
var a = 9;

6.
var myFirstName = 'Кирилл';
var myLastName = 'Круковский';

7.
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

8.
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

9.
let catName = "Oliver";
let catSound = "Meow!";

10.
const FCC = "freeCodeCamp";
let fact = "is cool!";
fact = "is awesome!";
console.log(FCC, fact);

11. 
var sum = 10 + 10;

12. 
var difference = 45 - 33;

13.
var product = 8 * 10;

14.
var quotient = 66 / 33;

15.
var myVar = 87;
myVar++;

16. 
var myVar = 11;
myVar--;

17.
var myDecimal = 5.7;

18.
var product = 2.5 * 2.0;

19. 
var quotient = 4.4 / 2.0; // Change this line

20. 
var remainder = 11 % 3;

21. 
var a = 3;
var b = 17;
var c = 12;
a += 12;
b += 9;
c += 7;

22. 
var a = 11;
var b = 9;
var c = 3;
a -= 6;
b -= 15;
c -= 1;

23. 
var a = 5;
var b = 12;
var c = 4.6;
a *= 5;
b *= 3;
c *= 10;

24. 
var a = 48;
var b = 108;
var c = 33;
a /= 12;
b /= 4;
c /= 11;

25. 
var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

26. 
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

27. 
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"

28. 
var myStr = "This is the start. " + "This is the end." 
console.log(myStr);

29. 
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence."

30. 
var myName = "Кирилл";
var myStr = "My name is " + myName + " and I am well";

31. 
var someAdjective = "qwe";
var myStr = "Learning to code is ";
myStr += someAdjective;

32. 
var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;

33.
var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0];

34. 
var myStr = "Jello World";
myStr = "Hello World";

35. 
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; 

36. 
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length -1]; 

37. 
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length -2]; 

38.
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";
var wordBlanks = myAdjective + " " + "!" + myNoun  +  " " + myAdverb + " " + myVerb + " ";

39. 
var myArray = ["dsf", 2];

40.
var myArray = [["Bulls", 23], ["White Sox", 45]];

41. 
var myArray = [50,60,70];
var myData = myArray[0];

42. 
var myArray = [18,64,99];
myArray[0] = 45

43. 
var myArray = 
[[1,2,3],
 [4,5,6], 
 [7,8,9], 
 [[10,11,12], 
 13, 14]];
var myData = myArray[2][1];

44. 
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

45. 
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

46. 
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

47. 
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul",35]);

48. 
var myList = [
  ["chocolate", 5],
  ["ovsanka", 1],
  ["grechka", 3],
  ["tvorog", 2],
  ["sir", 1]
  
  ];

49.
 function reusableFunction() {
    console.log ("Hi World");
    }
    reusableFunction();

50.
function functionWithArgs(wer,dfg) {
      console.log(wer+dfg);
    }
    functionWithArgs(3,4);

51. 
var myGlobal = 10;
    function fun1() {
      oopsGlobal = 5
    
    }
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

52. 
function myLocalScope() {
      var myVar = "внутри"
      console.log('inside myLocalScope', myVar);
    }
    myLocalScope();
    console.log('outside myLocalScope', myVar);

53. 
var outerWear = "T-Shirt";    
    function myOutfit() {
    var outerWear = "sweater";
      return outerWear;
    }
    myOutfit();

54.
function timesFive(num) {
      return num * 5;
    }

55.
var sum = 0; 
 function addThree() {
   sum = sum + 3;
 }
 function addFive(){ 
   sum = sum +5;
 } 
 addThree();
 addFive();
 
56. 
var processed = 0; 
 function processArg(num) {
   return (num + 3) / 5;
 }
 processed = processArg(7);

57. 
function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
  return item;
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

58.
 function welcomeToBooleans() {
  return true;
}

59. 
function trueOrFalse(wasThatTrue) {
if(wasThatTrue) {
  return "Yes, that was true";
} 
return "No, that was false";
}

60.
function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}
testEqual(10);

61. 
function testStrict(val) {
  if (val === 7) { 
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

62. 
function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

63. 
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

64.
function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

65. 
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  if (val > 10) {  
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

66. 
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }
  if (val >=10) {  
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

67. 
function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }
  if (val < 55) {  
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

68. 
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

69. 
function testLogicalAnd(val) {
    if (val >=25 && val <= 50) {
      return "Yes";
    }
  return "No";
}
testLogicalAnd(10);

70. 
function testLogicalOr(val) {
  if (val >20 ||  val <10) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

71. 
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

72. 
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  else if (val < 5) {
    return "Smaller than 5";
  } else {
  return "Between 5 and 10";}
}
testElseIf(5);

73. 
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

74.
function testSize(num) {
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
}

75. 
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
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
}
golfScore(5, 4);

76.  
function caseInSwitch(val) {
  var answer = "";
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
  return answer;
}
caseInSwitch(1);

77. 
function switchOfStuff(val) {
  var answer = "";
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
  return answer;
}
switchOfStuff(1);

78. 
function sequentialSizes(val) {
  var answer = "";
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
  return answer;
}
sequentialSizes(1);

79. 
function chainToSwitch(val) {
  var answer = "";
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
  return answer;
}
chainToSwitch(7);

80. 
function isLess(a, b) {
    return a < b;
}
isLess(10, 15);

81.
function abTest(a, b) {
if (a<0 || b<0){
  return undefined
}
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

82. 
var count = 0;
function cc(card) {
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
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

83. 
var myDog = {
  "name" : "asd",
  "legs" : 4,
  "tails" : 1,
  "friends" : ["sdfs", "sfsd"]
  };

84. 
  var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  var hatValue = testObj.hat;     
  var shirtValue = testObj.shirt;   

85. 
  var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  var entreeValue = testObj["an entree"];   
  var drinkValue = testObj["the drink"];    

86.
  var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  var playerNumber = 16; 
  var player = testObj[playerNumber];   

87. 
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  myDog["name"] = "Happy Coder";

88. 
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
   myDog.bark = "woof";

89. 
   var myDog = {
     "name": "Happy Coder",
     "legs": 4,
     "tails": 1,
     "friends": ["freeCodeCamp Campers"],
     "bark": "woof"
   };
   
   delete myDog.tails;

90.
  function phoneticLookup(val) {
     var result = "";
     var lookup = {
       alpha:"Adams",
       bravo:"Boston",
       charlie:"Chicago",
       delta:"Denver",
       echo: "Easy",
       foxtrot:"Frank"
     }
   result = lookup[val]
     return result;
   }
   phoneticLookup("charlie");

91. 
function checkObj(obj, checkProp) {
    if  (obj.hasOwnProperty(checkProp))
    {
      return obj[checkProp];
    } else 
    {return "Not Found";}
  }

92. 
var myMusic = [
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

93. 
var myStorage = {
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

94. 
var myPlants = [
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

95. 

96. 
var myArray = [];
  var i = 5;
  while(i > -1 ) {
    myArray.push(i);
    i--;
  }
  console.log(myArray)

97. 
var myArray = [];
  for(var i = 1; i <6; i++) {
    myArray.push(i)
  }

98. 
var myArray = [];
   for(var i = 1; i <10; i +=2) {
     myArray.push(i);
   }
   console.log(myArray)

99. 
var myArray = [];
   for (var i =9; i >0; i-=2 ) {
     myArray.push(i)
   }
   console.log(myArray)

100. 
var myArr = [ 2, 3, 4, 5, 6];
   var total = 0;
   for (var i = 0; i < myArr.length; i++) {
     total += myArr[i];
   }

101. 
function multiplyAll(arr) {
    var product = 1;
  for (var i = 0; i < arr.length; i++){
    for (var j= 0; j <arr[i].length; j++) {
      product *= arr [i][j]
    }
  }
    return product;
  }
  console.log()
  multiplyAll([[1,2],[3,4],[5,6,7]]);

102.
  var myArray = [];
  var i = 10;
  do   {
    myArray.push(i);
    i++;
  }while (i < 5);

103. 


104. 
function convertToInteger(str) {
    return parseInt(str);                  //ParseInt преобразует в целое число
    }
    
    convertToInteger("56");
    console.log(convertToInteger)

105. 
function convertToInteger(str) {
    return parseInt (str,2);     //можно преобразовавыть из системы счисления одной в другую. желаемая сисстема счисления указывается через запятую после числа
    }
    
    convertToInteger("10011");
    console.log(convertToInteger)

102. 
function checkEqual(a, b) {
    return a===b ? "Equal" : "Not Equal";  // здесь нужно строгое равенство именно три с одним не возвращает ответ "нет"
    }
    
    checkEqual(1, 2);
    console.log(checkEqual)

103. 
function checkSign(num) {
  return (num > 0) ? "positive" 
  : (num < 0) ? "negative"
   : "zero";                               // этот код реально не работает в браузере,, но задание правильно считается в кодкэмпе
  }
    checkSign(10);

104.
сonst contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
 for (let x = 0; x < contacts.length; x++) {
    if (contacts[x].firstName === name) {
      if (contacts[x].hasOwnProperty(prop)) {
        return contacts[x][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

105.
function randomFraction() {
var result = 0;
  while (result === 0) {
    result = Math.random();
  }
  return result;
}

106.
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

107.
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
  }
  
108.
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

109.
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

110.
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

111.
function checkSign(num) {
  return num > 0 ? "positive"
    : num < 0 ? "negative"
    : "zero";
}

112.
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

113.
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

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


17.
const result = {
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
let myRegex = /(Eleanor|Franklin *D.) Roosevelt/;
let result = myRegex.test(myString); 
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
let wsRegex = /^\s+|\s+$/g; 
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
arr.splice(2,2);  // splice позваляет удалять из массива первая цифра это с какой цифры начнётся удаление вторая сколько цифр будет удалено
arr.splice(1,2);
console.log(arr);

6.  function htmlColorNames(arr) {
const startIndex = 0;     // добавляю переменную с которой начнётся удаление
const amountDelete = 2;   // добавляю переменную в которой указываю сколько элементов будет удалено
arr.splice(startIndex, amountDelete, 'DarkSalmon', 'BlanchedAlmond');   // указываю эти элементы и то что хочу добавить с начала удаления
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

7.  function forecast(arr) {
  return arr.slice(2,4);   //позваляет извлекать из массива нужное первая цифра откуда начинается вторая на которой заканчивается но не включая эту цифру
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

8. function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {  
newArr.push([...arr]);   // копирование всего массива два раза
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

9. function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // использую метод ... чтобы обьединять массивы
  return sentence;
}
console.log(spreadOut());

10.  function quickCheck(arr, elem) {
if (arr.indexOf(elem) >= 0) {
    return true;
  }
  return false;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

11. 
function filteredArray(arr, elem) {
  let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(elem) == -1) {   // как понял, все массивы не содержащие 3 будут удалены
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

12.
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array',['deep']],   // вкладываю массив в массив
  ['mutate', 1327.98, 'splice', 'slice', [['deeper']],'push'],  // вкладываю в массив двойной массив
  ['iterate', 1.3849, 7, '8.4876',[[['deepest']]], 'arbitrary', 'depth'] // вкладываю в массив тройной массив
];

13. 
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13,         //добавляю в обьект новые переменные и их свойства
foods.grapes = 35,
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

14.
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};
userActivity.data.online = 45        // изменяю значения вложенного параметра 
console.log(userActivity);

15.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
return foods[scannedItem]    // в квадратные скобки попадает свойства параметра , той есть 25 
}

console.log(checkInventory("apples"));

16.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);

17.
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
 return ['Alan','Jeff','Sarah','Ryan'].every (name =>    //проверяется есть ли в обьекте такие слова
 userObj.hasOwnProperty(name)
 );
}

console.log(isEveryoneHere(users));

18.
function countOnline(usersObj) {
let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
}

19.
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
return Object.keys(obj)       // применения метода Object.keys для перачесления всех ключей и возвращения их в виде массива
}

console.log(getArrayOfUsers(users));

20.
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
userObj.data.friends.push(friend)
return userObj.data.friends
  // Only change code above this line
}

console.log(addFriend(user, 'Pete')); 



// Раздел Обьектно ориентированного программирования

1. 
let dog = {
name: "floki",
numLegs: 4
};

2. 
let dog = {
name: "Spot",
numLegs: 4
};
console.log(dog.name, dog.numLegs)    

3.
let dog = {
name: "Spot",
numLegs: 4,
sayLegs: function() { 
return "This dog has " + dog.numLegs + " legs.";
}
};
  
dog.sayLegs();

4. 
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};
  
  dog.sayLegs();

5. 
function Dog () {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 2;
  }

6. 
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  let hound = new Dog()

7. 
function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
    }
    
    let terrier = new Dog("zxx","qwe");
    console.log(terrier)

8. 
function House(numBedrooms) {
      this.numBedrooms = numBedrooms;
    }
     let myHouse = new House(4);
    
     myHouse instanceof House   // instanceof проверяет является ли myHouse изменёным элементом House

9.
function Bird(name) {
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

10.   
function Dog(name) {
      this.name = name;
    }
    
    Dog.prototype.numLegs = 4;   // в этой строке добавляем свойства обьекту Dog
    

    let beagle = new Dog("Snoopy");

11.   
function Dog(name) {
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
  

12.  
function Dog(name) {
    this.name = name;
  }
  
  
  function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {                // с помощью .construсtor проверяем является ли точное соответсвие candidate === Dog
      return true;
    } else {
      return false;
    }
  }

13.   
function Dog(name) {
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
  
14. 
function Dog(name) {
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

15. 
function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);   // с помощью isPrototypeOf проверяем что beagle это изменёный Dog.

16. 
function Dog(name) {
    this.name = name;
  }
  let beagle = new Dog("Snoopy");
  Dog.prototype.isPrototypeOf(beagle);  
  Object.isPrototypeOf(Dog.prototype);  

17. 
function Cat(name) {
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
  
18.   
function Animal() { }

   Animal.prototype = {
     constructor: Animal,
     eat: function() {
       console.log("nom nom nom");
     }
   };
   let duck = Object.create(Animal.prototype);    // создаю обьект и даю ему свойства прототипа, с наследованием
   let beagle = Object.create(Animal.prototype);

19. 
function Animal() { }

   Animal.prototype = {
     constructor: Animal,
     eat: function() {
       console.log("nom nom nom");
     }
   };
   
   function Dog() { }
   let beagle = new Dog();
   Dog.prototype = Object.create(Animal.prototype);  // все Dog наследуют свойства Animal

20.  
function Animal() { }
   function Bird() { }
   function Dog() { }
   
   Bird.prototype = Object.create(Animal.prototype);
   Dog.prototype = Object.create(Animal.prototype);
   Bird.prototype.constructor = Bird;    // меняю своиство прототипа вручную
   Dog.prototype.constructor = Dog;
   
   let duck = new Bird();
   let beagle = new Dog();

21. 
function Animal() { }
   Animal.prototype.eat = function() { console.log("nom nom nom"); };
   function Dog() { }
   Dog.prototype = Object.create(Animal.prototype);
   Dog.prototype.constructor = Dog;
   
   Dog.prototype.bark = function() {
     console.log("Woof!");
   };
   let beagle = new Dog();

22. 
function Bird() { }

   Bird.prototype.fly = function() { return "I am flying!"; };
   
   function Penguin() { }
   Penguin.prototype = Object.create(Bird.prototype);
   Penguin.prototype.constructor = Penguin;
   Penguin.prototype.fly = function() {
     return "Alas, this is a flightless bird.";  // изменяю унаследованые свойства
   };
   let penguin = new Penguin();
   console.log(penguin.fly());

23. 
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
    let glideMixin = function(obj) {     //связываю две переменные одним свойством с помощью Mixin
    obj.glide = function() {
     
    }
  };
  glideMixin(bird);
  glideMixin(boat);

24. 
function Bird() {
    let weight = 15
    this.getWeight = () => weight; //применя. замыкание чтобы защитить weight от прямого переназначения
  }

25. 
(function () {
    console.log("A cozy nest is ready");
  })();                                  //синтаксис немедленно вызываемой ананимной функции

26. 
let funModule = (function () {
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


    //// Раздел функционального програмирования
    
    1.


    2.


    3.
    // tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};
// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};
// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};
// When you close a tab
Window.prototype.tabClose = function(index) {
  const tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  const tabsAfterIndex = this.tabs.splice(1); // в скобках 1 надо
  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  return this;
 };
// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites
// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);


