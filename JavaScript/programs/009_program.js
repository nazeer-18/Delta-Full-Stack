//Write a program to check if two numbers have the same last digit.
let num1 = 31;
let num2 = 47852;
if(num1%10 == num2%10){
    console.log("numbers have the same last digit which is ",num1%10);
}else{
    console.log("numbers don't have the same last digit");
}