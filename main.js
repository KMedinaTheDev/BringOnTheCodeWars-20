//  refactored
function reverseWords(str){
// the map function applies the (split (), reverse() and join method to each word and returns them in the same order
return str.split(" ").map(function(word){
return word.split("").reverse().join("");
// return the words joined with spaces in between
}).join(" ");
}

// ORIGINAL SOLUTION
// function reverseWords(str) {
//   let strArr = str.split(" ");
// // iterate through the array
//   for (let i = 0; i < strArr.length; i++) {
// //
//     strArr[i] = reverse(strArr[i]);

//   }
//   return strArr.join(" ");
// }

// function reverse(str) {
//   let newStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];

//   }
//   return newStr;
// }
