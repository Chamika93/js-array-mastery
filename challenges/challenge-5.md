---
title: 'Rating Calculator'
functionName: 'ratingCalculator'
testCases:
    - {input: [
        { hotelName: "hotel 1", totalRatings: 10 , numberOfRatings: 2 },
        { hotelName: "hotel 2", totalRatings: 30 , numberOfRatings: 10 },
        { hotelName: "hotel 3", totalRatings: 40 , numberOfRatings: 10 },
        { hotelName: "hotel 4", totalRatings: 10 , numberOfRatings: 10 },
        {hotelName: "hotel 5", totalRatings: 21 , numberOfRatings: 7 }
        ],
       output: [
        { hotelName: "hotel 1", rating: 5 },
        { hotelName: "hotel 2", rating: 3 },
        { hotelName: "hotel 3", rating: 4 },
        { hotelName: "hotel 4", rating: 1 },
        { hotelName: "hotel 5", rating: 3 }
        ]}
    - {input: [
        { hotelName: "Hotel K", totalRatings: 2 , numberOfRatings: 2 },
        { hotelName: "Hotel L", totalRatings: 3 , numberOfRatings: 3 },
        { hotelName: "Hotel M", totalRatings: 4 , numberOfRatings: 2 },
        { hotelName: "Hotel N", totalRatings: 5 , numberOfRatings: 1 },
        { hotelName: "Hotel O", totalRatings: 1 , numberOfRatings: 2 }  
        ],
       output: [
        { hotelName: "Hotel K", rating: 1 },
        { hotelName: "Hotel L", rating: 1 },
        { hotelName: "Hotel M", rating: 2 },
        { hotelName: "Hotel N", rating: 5 },
        { hotelName: "Hotel O", rating: 0.5 }
        ]}
    - {input: [
        { hotelName: "Hotel X", totalRatings: 27 , numberOfRatings: 11 },
        { hotelName: "Hotel Y", totalRatings: 35 , numberOfRatings: 14 },
        { hotelName: "Hotel Z", totalRatings: 44 , numberOfRatings: 12 },
        { hotelName: "Hotel W", totalRatings: 31 , numberOfRatings: 11 },
        { hotelName: "Hotel V", totalRatings: 25 , numberOfRatings: 15 }
        ],
       output: [
        { hotelName: "Hotel X", rating: 2.4545454545454546 },
        { hotelName: "Hotel Y", rating: 2.5 },
        { hotelName: "Hotel Z", rating: 3.6666666666666665 },
        { hotelName: "Hotel W", rating: 2.8181818181818183 },
        { hotelName: "Hotel V", rating: 1.6666666666666667 }
        ]}
    - {input: [
        { hotelName: "Hotel M", totalRatings: 45 , numberOfRatings: 12 },
        { hotelName: "Hotel N", totalRatings: 40 , numberOfRatings: 15 },
        { hotelName: "Hotel O", totalRatings: 36 , numberOfRatings: 13 },
        { hotelName: "Hotel P", totalRatings: 50 , numberOfRatings: 12 },
        { hotelName: "Hotel Q", totalRatings: 42 , numberOfRatings: 14 }
        ],
       output: [
        { hotelName: "Hotel M", rating: 3.75 },
        { hotelName: "Hotel N", rating: 2.6666666666666665 },
        { hotelName: "Hotel O", rating: 2.769230769230769 },
        { hotelName: "Hotel P", rating: 4.166666666666667 },
        { hotelName: "Hotel Q", rating: 3 }
        ]}
    - {input: [
        { hotelName: "Hotel R", totalRatings: 60 , numberOfRatings: 15 },
        { hotelName: "Hotel S", totalRatings: 55 , numberOfRatings: 12 },
        { hotelName: "Hotel T", totalRatings: 52 , numberOfRatings: 13 },
        { hotelName: "Hotel U", totalRatings: 50 , numberOfRatings: 11 },
        { hotelName: "Hotel V", totalRatings: 47 , numberOfRatings: 14 }
        ],
       output: [
        { hotelName: "Hotel R", rating: 4 },
        { hotelName: "Hotel S", rating: 4.583333333333333 },
        { hotelName: "Hotel T", rating: 4 },
        { hotelName: "Hotel U", rating: 4.545454545454546 },
        { hotelName: "Hotel V", rating: 3.357142857142857 }
        ]}
---


Your task is to create a function which takes an array of objects contain hotel name, total rating points, number of ratings then return an array of objects contain hotel name and average rating value.

For example, 
```js
[
    { 
        hotelName: "hotel 1", 
        totalRatings: 10 , 
        numberOfRatings: 2 
    },
    { 
        hotelName: "hotel 2", 
        totalRatings: 30 , 
        numberOfRatings: 10 
    },
    { 
        hotelName: "hotel 3",
        totalRatings: 40 ,
        numberOfRatings: 10 
    },
    { 
        hotelName: "hotel 4",
        totalRatings: 10,
        numberOfRatings: 10 
    },
    {
        hotelName: "hotel 5",
        totalRatings: 21,
        numberOfRatings: 7 
    }
]
``` 
should return 
```js
[
    { hotelName:"hotel 1", rating: 5 },
    { hotelName:"hotel 2", rating: 3 },
    { hotelName:"hotel 3", rating: 4 },
    { hotelName:"hotel 4", rating: 1 },
    { hotelName:"hotel 5", rating: 3 }
]
```