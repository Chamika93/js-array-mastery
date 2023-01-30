---
title: 'Most frequent number'
functionName: 'mostOccurredValue'
testCases:
    - { input: [1, 2, 3, 4, 4, 5, 6, 7, 8, 4], output: 4 }
    - { input: [122, 150, 200, 122, 199, 350, 399, 122, 300, 200, 199, 250, 399, 500, 400, 199, 200, 500, 250, 350], output: 122 }
    - { input: [3, 17, 29, 43, 55, 67, 77, 89, 102, 43, 131], output: 43 }
    - { input: [24, 56, 12, 56, 88, 24, 33, 88, 45, 56, 68, 45], output: 56 }
    - { input: [1245, 1432, 1150, 1620, 1456, 1150, 1900, 1435, 1456, 1600, 1300, 1650, 1700, 1700, 1805, 1805, 1245, 1360, 1290, 1320, 1700, 1300], output: 1700 }
---

Your task is to find  the most frequently occurring value in that array without using **for** loop or **forEach** method.

 ```js
const array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 4];
 ``` 
 should return **4**
