function reverseString() {

    let userWord = document.getElementById("tacoCat").value;
    let cleanedWord = userWord.replaceAll(/[^a-zA-Z0-9]\s/g, "").toLowerCase();
    let start = cleanedWord.length - 1;
    let reverseWord = "";

    for (let i = start; i >= 0; i--) {
        reverseWord += cleanedWord[i];
    }

    let output = document.getElementById("tacoOutput");
    output.innerText = reverseWord;


    let trueFalse = document.getElementById("results");
    if (cleanedWord == reverseWord) {
        trueFalse.innerText = "This word/phrase is a palindrome.";
    } else {
        trueFalse.innerText = "This  word/phrase is not a palindrome."
    }


}