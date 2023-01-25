---
title: 'Letter multiple occurance'
functionName: 'stringChecker'
testCases:
    - {input: ['c', 'r', 'a', 't', 'e'], output: true}
    - {input: ['b' ,'a', 'n', 'a', 'n', 'a'], output: false}
---


Create a function to return true if an array of letters does not contain same letter more than one time.

For example 
```js
['c', 'o', 'n', 'v', 'i', 'n', 'c', 'e']
``` 
should <span class="flex">return **true** and 
```js
['b' ,'a', 'n', 'a', 'n', 'a']
``` 
should return **false**. without using for loop.