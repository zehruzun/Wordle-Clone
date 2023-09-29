let rows = 5;
let columns = 5;
let currentRow = 0;
let currentCol = 0;
let answerWord = "ELMAS";
let answer = "ELMAS";
let currentAnswer = [];
let answerArray;
window.onload = () => {
    //answer = answer ?? prompt("kelime gir babuş");
    answerArray = (answer.split(""));
    setWordBoard(answer, answerArray);
};
function setWordBoard(word, answerArray) {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.innerText = "";
            let wordBoardHTML = document.getElementById("wordBoard");
            wordBoardHTML?.appendChild(tile);
        }
    }
    setAnswer();
}
function setAnswer() {
    document.addEventListener("keyup", (e) => {
        let currentTile;
        if (("KeyA" <= e?.code && e.code <= "KeyZ")) {
            currentTile = document.getElementById(currentRow.toString() + "-" + currentCol.toString());
            if (currentTile?.innerHTML == "") {
                currentTile.innerHTML = e.key.toUpperCase();
                currentAnswer.push(e.key.toUpperCase());
            }
            if (currentCol != 5) {
                currentCol++;
            }
        }
        else if ("KeyEnter" && currentCol == 5) {
            checkAnswer();
            currentRow++;
            currentCol = 0;
        }
    });
    function checkAnswer() {
        for (let c = 0; c < currentAnswer.length; c++) {
            let currentTile = document.getElementById(currentRow.toString() + "-" + c.toString());
            let currentLetter = currentTile?.innerHTML;
            if (answerArray[c] == currentTile?.innerHTML) {
                console.log("green: " + currentTile?.innerHTML);
                currentTile?.classList.add("greenBox");
            }
            else if (currentLetter != null && answerArray.includes(currentLetter)) {
                currentTile?.classList.add("yellowBox");
                console.log("yellow" + currentLetter);
            }
            else {
                currentTile?.classList.add("blackBox");
            }
        }
    }
}
