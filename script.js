//A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
//Ask user for their salary and year of service and print the net bonus amount.


// let salary=10000
// let yearofexp=8
// if(yearofexp>5){
//     bonus=salary*0.05
//     console.log('bonus is ',bonus);
    
// }



// //Write a program to calculate the electricity bill (accept number of unit from user) according to the following criteria :
// Unit                                                     Price  
// First 100 units                                               no charge
// Next 100 units                                              Rs 5 per unit
// After 200 units                                             Rs 10 per unit 
// (For example if input unit is 350 than total bill amount is Rs2000)                                                                                 



// let unit = 350
// if(unit==100){
//     console.log('charge 0');    
// }
// else if(unit==200){
//     bill=(unit-100)*5
//     console.log('charge is',bill);
// }
// else {
//     bill=(100*5)+((unit-200)*10)
//     console.log(bill);
    
// }






// Write a program to accept a number from 1 to 7 and display the name of the day like 1 for Sunday , 2 for Monday and so on.



let city = prompt("Enter a city name");
if (city === "delhi") {
    monument = "Red Fort";
} else if (city === "agra") {
    monument = "Taj Mahal";
} else if (city === "jaipur") {
    monument = "Jal Mahal";
} else {
    monument = "Sorry, no monument information available for this city.";
}

console.log("The monument in " + city + " is: " + monument);