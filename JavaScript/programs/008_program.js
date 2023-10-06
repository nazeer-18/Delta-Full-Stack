//Write a program to find largest of 3 numbers.
let a = 3, b = 4, c = 5;
if(a>b){
    if(a>c){
        console.log(a ,"is largest");
    }else{
        console.log(c ,"is largest");
    }
}else{
    if(c>b){
        console.log(c ,"is largest");
    }else{
        console.log(b ,"is largest")
    }
}
