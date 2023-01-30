---
title: 'Age Accumilator'
functionName: 'ageAccumilator'
testCases:
    - { input: [
        { name: "Person 1", age: 10 },
        { name: "Person 2", age: 21 },
        { name: "Person 3", age: 31 },
        { name: "Person 4", age: 1 },
        { name: "Person 5", age: 61 },
        ], output: 113
        }
    - {input: [{ name: "Individual 1", age: 15 },{ name: "Individual 2", age: 25 },{ name: "Individual 3", age: 35 },{ name: "Individual 4", age: 20 },{ name: "Individual 5", age: 40 }], output: 120}
    - {input: [{ name: "Person A", age: 30 },{ name: "Person B", age: 40 },{ name: "Person C", age: 50 },{ name: "Person D", age: 60 }], output: 180}
    - {input: [{ name: "Individual 1", age: 18 },{ name: "Individual 2", age: 25 },{ name: "Individual 3", age: 32 },{ name: "Individual 4", age: 45 },{ name: "Individual 5", age: 55 },{ name: "Individual 6", age: 60 }], output: 235}
    - {input: [{ name: "Person X", age: 20 },{ name: "Person Y", age: 25 },{ name: "Person Z", age: 30 },{ name: "Person P", age: 35 },{ name: "Person Q", age: 40 },{ name: "Person R", age: 45 },{ name: "Person S", age: 50 },{ name: "Person T", age: 55 }], output: 300}
---

Your task is to create a function that take an array with objects where each object has 2 fields name and age, then return the sum of all ages equal or above 18.

For example
```js
[{ name: "Person 1", age: 10 }, 
{ name: "Person 2", age: 21 },
{ name: "Person 3", age: 31 },
{ name: "Person 4", age: 1 },
{name: "Person 5", age: 61 }]
```
\
should return **113**.
