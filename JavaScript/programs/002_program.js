// Write  a program implementing traffic rule to go or stop or ready based on signal light
let color = "yellow";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    case "yellow":
        console.log("Ready");
        break;
    default:
        console.log("Invalid");
}