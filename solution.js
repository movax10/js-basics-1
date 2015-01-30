function squaresOfMax(a, b, c) {
  // Write a function that takes three numbers and returns
  // sum of squares of two largest
  if (a < b && a < c) {
    a = 0;
  }
  else if (b < c) {
    b = 0;
  } else c = 0;
  return a*a + b*b + c*c;
}

function drawTriangle() {
  // Write a loop that makes seven calls to console.log to output the following triangle:
  //
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  var str="";
  for (var n = 1; n <= 7; n++) {
    str += '#';
    console.log(str);
  }
}

function fizzBuzz() {
  // Write a program that uses console.log to print all the numbers from 1 to 100,
  // with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  // and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  //
  // When you have that working, modify your program to print "FizzBuzz",
  // for numbers that are divisible by both 3 and 5 (and still print "Fizz"
  // or "Buzz" for numbers divisible by only one of those).
  for (var n = 1; n <= 100; n++) {
    var printedValue="";
    if (n % 3 === 0){
      printedValue += "Fizz";
    }
    if (n % 5 === 0){
      printedValue += "Buzz";
    }
    printedValue = printedValue || n;
    console.log(printedValue);
  }
}

function chessBoard(size) {
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the
  // grid there is either a space or a “#” character. The characters
  // should form a chess board.
  //
  // Passing this string to console.log should show something like this:
  //
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //  # # # #
  // # # # #
  //
  // When you have a program that generates this pattern,
  // define a variable size = 8 and change the program so that
  // it works for any size, outputting a grid of the given width and height.
  var even = "";
  var odd = "";
  var space = ' ';
  var octothorpe = '#';
  for (var i = 1; i <= size; i++){
    even += (i%2 === 0) ? space : octothorpe;
    odd  += (i%2 === 0) ? octothorpe : space;
  }
  var result = [];
  for (var j = 1; j <= size; j++){
    result.push((j%2 === 0) ? even : odd);
  }
  return result.join('\n');
}

module.exports.squaresOfMax = squaresOfMax;
module.exports.drawTriangle = drawTriangle;
module.exports.fizzBuzz = fizzBuzz;
module.exports.chessBoard = chessBoard;
