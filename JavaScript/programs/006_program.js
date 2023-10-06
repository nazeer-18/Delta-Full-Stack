//Write a switch statement to print the months in a quarter. Months in Quarter1:January,February,March Months in Quarter2:April,May,June Months in Quarter3:July,August,September Months in Quarter4:October,November,December [Use the number as the case value in switch]
let q = 2;
switch(q){
    case 1:
        console.log("January , February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July,August,September");
        break;
    case 4:
        console.log("October,November,December");
        break;
    default:
        console.log("Invalid")
}