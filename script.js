const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
let isPalindrome = false;

const clearInputString = (str) => {
    const regex = /[+-\s]/g;
    return str.replace(regex, "");
}