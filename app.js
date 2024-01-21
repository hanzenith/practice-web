// Generate random number
let y = Math.floor(Math.random() * 10 + 1);
// Counting the guesses for correct ones
let guess = 1

document.getElementById("submitguess").onclick = function () {
    // Number guessed by the user
    let x = document.getElementById("guessField").value;

    if (x == y) {
        alert("CONGRATULATIONS!!! YOU GUESSED RIGHT IN" + " " + guess + " " + "GUESS");
    }

    else if (x > y) {
        guess++;
        alert("SORRY :( TRY A SMALLER NUMBER!");
    }

    else {
        guess++;
        alert("SORRY :( TRY A GREATER NUMBER!");
    }
}


