---
title: 'Rating Calculator'
functionName: 'ratingCalculator'
testCases:
    - {input: [
        { hotelName: "hotel 1", totalRatings: 10 , numberOfRatings: 2 },
        { hotelName: "hotel 1", totalRatings: 30 , numberOfRatings: 10 },
        { hotelName: "hotel 1", totalRatings: 40 , numberOfRatings: 10 },
        { hotelName: "hotel 1", totalRatings: 10 , numberOfRatings: 10 },
        {hotelName: "hotel 1", totalRatings: 21 , numberOfRatings: 7 }
        ],
       output: [
        { hotelName: "hotel 1", rating: 5 },
        { hotelName: "hotel 1", rating: 3 },
        { hotelName: "hotel 1", rating: 4 },
        { hotelName: "hotel 1", rating: 1 },
        { hotelName: "hotel 1", rating: 3 }
        ]}
---


Given an array of objects contain hotel name, total rating points, number of ratings return an array of objects contain hotel name and average rating value.

For example, ```[{ hotelName: "hotel 1", totalRatings: 10 , numberOfRatings: 2 },{ hotelName: "hotel 1", totalRatings: 30 , numberOfRatings: 10 },{ hotelName: "hotel 1", totalRatings: 40 , numberOfRatings: 10 },{ hotelName: "hotel 1", totalRatings: 10 , numberOfRatings: 10 },{hotelName: "hotel 1", totalRatings: 21 , numberOfRatings: 7 }]```, 
should return ```[{ hotelName: "hotel 1", rating: 5 },{ hotelName: "hotel 1", rating: 3 },{ hotelName: "hotel 1", rating: 4 },{ hotelName:"hotel 1", rating: 1 },{ hotelName: "hotel 1", rating: 3 }]```.