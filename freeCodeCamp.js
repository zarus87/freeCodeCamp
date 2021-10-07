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

41.



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
