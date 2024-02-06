const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const textInput = document.getElementById("text-input")

// const clearInputString = (str) => {
//     const regex = /[+-\s]/g;
//     return str.replace(regex, "");
// }

const isPalindrome = (str) => {
    const clearedString = str.replace(/\W_]/g);
    return clearedString === clearedString.split('').reverse().join();
}

const showAlert = (message) => {
    alert(message);
}

const checkPalindrome = () => {

}