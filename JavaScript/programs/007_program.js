//A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total length greater than 5.For a given string print if it is golden or not.
let s = "Aibcded";
if ((s[0] == 'a' || s[0] == 'A') && s.length > 5) {
    console.log("golden string");
} else {
    console.log("Not a golden string");
}
