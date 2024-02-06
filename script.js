const checkButton = document.getElementById("check-btn");
const resultText = document.getElementById("result");
const textInput = document.getElementById("text-input")

// const clearInputString = (str) => {
//     const regex = /[+-\s]/g;
//     return str.replace(regex, "");
// }

const isPalindrome = (str) => {
    const clearedString = str.toLowerCase().replace(/[\W_]/g, "");
    return clearedString === clearedString.split('').reverse().join('');
}

const showAlert = (message) => {
    alert(message);
}

const checkPalindrome = () => {
    const inputText = textInput.value.trim();
    if (inputText === '') {
        showAlert("Please input a value");
        return;
    }

    const result = isPalindrome(inputText);
    if (result) {
        resultText.textContent = `${inputText} is a palindrome`;
    } else {
        resultText.textContent = `${inputText} is not a palindrome`;
    }
}

checkButton.addEventListener('click', checkPalindrome);