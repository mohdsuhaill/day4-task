// Do the below programs in anonymous function & IIFE....
// a.Print odd numbers in an array...
// using annoymous function ;

/*var result =[];
var a = function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
      result.push(arr[i])
    }
  }
  return result
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));*/

// using IIFE function ;

 /* var result1 = [];
  (function(arr){
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
      result1.push(arr[i]);
    }
  }
  console.log(result1);
})([1,2,3,4,5,6,7,8,9,10]);*/

// b.Convert all the strings to title caps in a string array...
// use annoymous function..

/* var titlecase =function (arr){
  var res = arr.toString();
//   console.log(res);
  var data = res.toLowerCase().split(" ")
//   console.log(data);
  for(var i=0;i<data.length;i++){
    data[i] =data[i].charAt(0).toUpperCase()+data[i].slice(1)
  }
  return data.join(" ")
 }
 console.log(titlecase(["tHis iS JAVAScript"]));*/

//  use IIFE function.. 

/* (function(arr){
  var res = arr.toString();
  // console.log(res);
  var data = res.toLowerCase().split(" ")
  // console.log(data);
  for(var i=0;i<data.length;i++){
    data[i] =data[i].charAt(0).toUpperCase()+data[i].slice(1)
  }
  console.log( data.join(" "));
 })(["tHe iS JAVAScript"])*/

//c.Sum of all numbers in an array...
// use annoymous function..
// var a =0;
// var b= function (sum){
//   for (var i=1;i<=sum;i++)
// {
//    a = a+i;
// }
// return a
// }
// console.log(b([10]));

// use IIFE function...
/* var a =0;
(function(sum){
  for (var i =1;i<=sum;i++)
{
   a = a+i;
}
console.log(a);
})([10]); */

// d.Return all the prime numbers in an array
// use annoymous function...
/*
var result =[];
var prime = function (arr){
  for(var i=0;i<arr.length;i++){
   var count =0
   for(var j=2;j<arr[i];j++){
    if(arr[i]%j===0)
    {
      count = 1;
    }
   } 
   if(count ===0) 
   {
    result.push(arr[i])
  }
  }
  return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]));*/

// using IIFE function... 
/* var result =[];
 var prime=(function (arr){
  for(var i=0;i<arr.length;i++){
   var count =0
   for(var j=2;j<arr[i];j++){
    if(arr[i]%j===0)
    {
      count = 1;
    }
   } 
   if(count ===0) 
   {
    result.push(arr[i])
  }
  }
  console.log(result);
})(([1,2,3,4,5,6,7,8,9,10]));*/

//e.Return all the palindromes in an array...
// using annoymous function .... 
/* var palindrome =function (a){
  var result = [];
  for(var i = 0;i<a.length;i++){
    var data = a[i].split("").reverse().join("");
    if(data === a[i]){
      result.push(a[i])
    }
  }
  return result
}
console.log(palindrome(["dad","mom","sun","pop"]));*/

// using IIFE function..
/* var palindrome =(function (a){
  var result = [];
  for(var i = 0;i<a.length;i++){
    var data = a[i].split("").reverse().join("");
    if(data === a[i]){
      result.push(a[i])
    }
  }
  return result
})
console.log(palindrome(["dad","mom","sun","pop"])); */

//F. Return median of two sorted arrays of the same size.

// using annoymous function
/*
 var median = function (arr1,arr2){
  let a=[...arr1, ...arr2];
  a.sort((b,c)=>b-c);
  let n = a.length;
  if(n%2===0){
    return ((a[n/2]+a[n-1]/2)/2)
  }
  else
  {
    return a[Math.floor(n/2)]
  }
}
console.log(median([1,3,5,7],[2,4,6,8]));*/

// using IIFE function

/* 
 var median =(function (arr1,arr2){
  let a=[...arr1, ...arr2];
  a.sort((b,c)=>b-c);
  let n = a.length;
  if(n%2===0){
    console.log (((a[n/2]+a[n-1]/2)/2));
  }
  else
  {
    console.log (a[Math.floor(n/2)])
  }
})([1,3,5,7],[2,4,6,8]); */

// h.Rotate an array by k times
// using annoymous function...

/*let n=3;
var rotate = function (a,n){
  for(var i=0;i<n;i++){
    a.push(a[i])
  }
  for(var i=0;i<n;i++){
    a.shift()
  }
  return a
}
console.log(rotate([1,2,3,4,5],n));*/

// using IIFE function 

/* let n=3;
var rotate =( function (a,n){
  for(var i=0;i<n;i++){
    a.push(a[i])
  }
  for(var i=0;i<n;i++){
    a.shift()
  }
  console.log(a)
})([1,2,3,4,5],n);*/


//2.  Do the below programs in arrow functions.
// a.Print odd numbers in an array
/* var result2 = [];
var odd = (arr)=>{
for(var i=0;i<arr.length;i++){
  if(arr[i]%2!==0){
    result2.push(arr[i]);
  }
}
return result2
};
console.log(odd([1,2,3,4,5,6,7,8,9,10])); */

// b.Convert all the strings to title caps in a string array...

/* var titlecase= (arr)=>{
  var res = arr.toString();
  // console.log(res);
  var data = res.toLowerCase().split(" ")
  // console.log(data);
  for(var i=0;i<data.length;i++){
    data[i] =data[i].charAt(0).toUpperCase()+data[i].slice(1)
  }
  console.log( data.join(" "));
 }
 titlecase(["tHe iS JAVAScript"]);*/

// c. Sum of all numbers in an array... 

/* var a =0;
 var b =(sum)=>{
  for (var i =1;i<=sum;i++)
{
   a = a+i;
}
console.log(a);
}
(b([10]));*/

// d.Return all the prime numbers in an array...

/*
var result =[];
  var prime = (arr)=>{
  for(var i=0;i<arr.length;i++){
   var count =0
   for(var j=2;j<arr[i];j++){
    if(arr[i]%j===0)
    {
      count = 1;
    }
   } 
   if(count ===0) 
   {
    result.push(arr[i])
  }
  }
  console.log(result);
}
(prime([1,2,3,4,5,6,7,8,9,10]));*/

// e.Return all the palindromes in an array....
/* var palindrome= (a)=>{
  var result = [];
  for(var i = 0;i<a.length;i++){
    var data = a[i].split("").reverse().join("");
    if(data === a[i]){
      result.push(a[i])
    }
  }
  console.log(result);
}
(palindrome(["dad","mom","sun","pop"]));*/

