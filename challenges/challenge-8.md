---
title: 'Symmetric array finder'
functionName: 'symmetricArrayFinder'
testCases:
    - { input: [12, 33, 6, 47, 58, 19, 84], output: false }
    - { input: ["dog", "cat", "bird", "fish", "bird", "cat", "dog"], output: true }
    - { input: [3, 17, 29, 43, 55, 67, 77, 89, 102, 120, 131], output: false }
    - { input: ["apple", "banana", "cherry", "date", "elderberry", "date", "cherry", "banana", "apple"], output: true }
    - { input: [7, 11, 14, 19, 22, 27, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97], output: false }
---

Your task is to find if an array is symmetric. In a symmetric array first element should be equal to the last element and second element
should be equal to the one before last

 ```js
const random = [12, 33, 6, 47, 58, 19, 84];
 ``` 
 should return **false**

 ```js
const random = [
    "dog", 
    "cat",
    "bird",
    "fish",
    "bird",
    "cat",
    "dog"];
 ``` 

  should return **true**