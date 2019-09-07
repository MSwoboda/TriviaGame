var game = {
    score: 0,
    wins: 0,


}

document.addEventListener('keydown', consoleWrite);


function consoleWrite(e) {
    if (e.key === "Enter") {
        log.textContent = ` `;

        if (log.textContent.toLowerCase() === "y" || log.textContent.toLowerCase() === "yes") {
            //append new line and terminal 
            startGame()
        } else {
            startGame()
        }
    }

    if (isLetter(e.key)) {
        log.textContent += `${e.key}`;
    }
}


function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
}

function startGame(params) {

}