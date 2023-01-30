---
title: 'Total product calculator'
functionName: 'productCalculator'
testCases:
    - { input: {
                product1: [10, 15, 20, 25, 30],
                product2: [5, 10, 15, 20, 25],
                product3: [15, 20, 25, 30, 35],
                product4: [20, 25, 30, 35, 40]
            }, output: 450 }
    - { input: {
                productA: [1, 3, 5, 7, 9],
                productB: [2, 4, 6, 8, 10],
                productC: [3, 6, 9, 12, 15],
                productD: [4, 8, 12, 16, 20],
                productE: [5, 10, 15, 20, 25]
            }, output: 235 }
    - { input: {
                item1: [100, 150, 200, 250, 300],
                item2: [50, 100, 150, 200, 250],
                item3: [150, 200, 250, 300, 350],
                item4: [200, 250, 300, 350, 400]
            }, output: 4500 }
    - { input: {
                productX: [5, 10, 15, 20, 25],
                productY: [10, 15, 20, 25, 30],
                productZ: [15, 20, 25, 30, 35],
                productW: [20, 25, 30, 35, 40]
            }, output: 450 }
    - { input: {
                gadget1: [20, 40, 60, 80, 100],
                gadget2: [10, 20, 30, 40, 50],
                gadget3: [5, 10, 15, 20, 25],
                gadget4: [30, 60, 90, 120, 150],
                gadget5: [25, 50, 75, 100, 125]
            }, output: 1350 }
---

You have an object where keys represent a product and value of the key is an array.  Each array has 5 numbers representing sales of the
product in last 5 days. Your task is to create an function that returns the total number of sales.

 ```js
const salesData1 = {
  product1: [10, 15, 20, 25, 30],
  product2: [5, 10, 15, 20, 25],
  product3: [15, 20, 25, 30, 35],
  product4: [20, 25, 30, 35, 40]
};
 ``` 
 should return **120**

