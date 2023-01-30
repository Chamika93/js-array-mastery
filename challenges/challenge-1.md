---
title: 'Filter array'
functionName: 'stringChecker'
testCases:
    - {input: ["Hey", "hey"], output: true}
    - {input: ["Alien", "line"], output: true}
    - {input: ["cat", "dog"], output: false}
    - {input: ["antidisestablishmentarianism", "disestablishmentarianism"], output: true}
    - {input: ["counterdemonstration", "counterproliferation"], output: false}
---

Your task is to create a function that takes an array of 2 strings as input and returns **true**
if the first string of the array contains all of the letters in the second string of the array.

For example,

```js
["hello", "Hello"]
``` 

should return **true** because all of the letters in the second string are present in the first, ignoring case.

```js
["hello", "hey"]
``` 
should return **false** because the string hello does not contain a *y*. 

Lastly, 
```js
["Alien", "line"]
```
should return **true** because all of the letters in *line* are present in *Alien*.