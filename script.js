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



// let city = prompt("Enter a city name");
// if (city === "delhi") {
//     monument = "Red Fort";
// } else if (city === "agra") {
//     monument = "Taj Mahal";
// } else if (city === "jaipur") {
//     monument = "Jal Mahal";
// } else {
//     monument = "Sorry, no monument information available for this city.";
// }

// console.log("The monument in " + city + " is: " + monument);




// while loop

// print 1 to 10


// let i=1
// while(i<=10){
//     console.log(i);
//     i++
// }


// even and odd number upto 10
// let i=1
// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++
// }


// do while


// let i=1
// do{
//     console.log(i);
//     i++
// }
// while(i<=10)


// for loop

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for in loop

// let l=[10,20,30,40]
// for(i in l){
//     console.log(l[i]);
// }



// for of loop


// let l=[10,20,30,40]
// for(i of l){
//     console.log(i);
// }


// dictionary in  js

// let d={
//     name:"ram",
//     age:20,}
// }
// for(i in d){
//     console.log(d[i]);
// }
// }
// for(i of d){
//     console.log(d[i]);
// }



// let a = parseInt(prompt("Enter a number"));
// let b = parseInt(promt("enter a number"));
// console.log(a,b);
// console.log(typeof a,b);



// multiplicatin taple of a digit

// let a = parseInt(prompt("Enter a number"));
// for(i=1;i<=10;i++){
//     console.log(a*i);
// }


// let num = parseInt(prompt("Enter a number"));
// for ( i = 1; i <= 10; i++) {
//     console.log(`${num} x ${i} = ${num * i}`);
// }





// let num =  parseInt(prompt("Enter a number")); 
// let i = 1;

// while (i <= 10) {
//     console.log(`${num*i} x ${i} = ${num}`);
//     i++;
// }


// multiplicatin taples of a in between digits

let a = parseInt(prompt("Enter a number"));
let b = parseInt(prompt("Enter a number"));
for(i=a;i<=b;i++){
    for(j=1;j<=10;j++){
    console.log(`${i} x ${j} = ${i*j}`);
}
}

