let movieEmpty = [];  //How we would go about making an empty array
let movieCast = ['Tom', 'Jake', 'Paul']; //Creating an array with a cast

movieCast.push('Luna'); //pushes new member to the end of the array with an index of 3 with a length of 4

movieCast.pop();  //This now removes the last person from the array. So now Luna is gone from the array
console.log(movieCast);

//we can also use unshift to add elements to the beginning of the array
movieCast.unshift("Joseph");
console.log(movieCast);

//Lastly shift() will remove the first element in the array.  Slightly confusing syntax but helpful to know.
