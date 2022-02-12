// Palindrome
let palindromeInput = document.querySelector(".palindrome__input");
let palindromeTextArea = document.querySelector(".palindrome__textarea");
let palindromeButton = document.querySelector(".palindrome__button");
console.log(palindromeInput.value);

palindromeButton.addEventListener("click",() =>{ 


        for (let i = 0; i < palindromeInput.value; i++) {
           if (i.toString() == i.toString().split("").reverse().join("")) {
            palindromeTextArea.value += i + "\n"
           }
            
       
        }
    });

