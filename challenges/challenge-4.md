---
title: 'Adult Validator'
functionName: 'adultValidator'
testCases:
    - {input: [
{ name: "Person 1", age: 10 },
{ name: "Person 2", age: 21 },
{ name: "Person 3", age: 31 },
{ name: "Person 4", age: 1 },
{ name: "Person 5", age: 61 }
], output: false}
---


Given an array with objects of 2 fields name and age return true if all ages equal or above 18.

 ```[{ name: "Person 1", age: 10 },{ name: "Person 2", age: 21 },{ name: "Person 3", age: 31 },{ name: "Person 4", age: 1 },{ name: "Person 5" age: 61 }]```, should return false.
