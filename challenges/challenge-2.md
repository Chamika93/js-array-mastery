---
title: 'Letter multiple occurance'
functionName: 'stringChecker'
testCases:
    - {input: ['c', 'r', 'a', 't', 'e'], output: false}
    - {input: ['b' ,'a', 'n', 'a', 'n', 'a'], output: true}
    - {input: ['b' ,'o', 'o', 'k', 'k', 'e', 'e', 'p', 'e', 'r'], output: true}
    - {input: ['s' ,'u', 'b', 'c', 'o', 'm', 'm', 'i', 't', 't', 'e', 'e'], output: true}
    - {input: ['u' ,'n', 'c', 'o', 'p', 'y', 'r', 'i', 'g', 'h', 't', 'a', 'b', 'l', 'e'], output: false}
---


Your task is to create a function that return **true** if an array of letters contain same letter more than one time.

For example 
```js
['c', 'o', 'n', 'v', 'i', 'n', 'c', 'e']
``` 
should <span class="flex">return **false** and 
```js
['b' ,'a', 'n', 'a', 'n', 'a']
``` 
should return **true**.