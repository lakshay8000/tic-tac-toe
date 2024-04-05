const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWinner(board, setWinner, setFinished) {
    for (let i = 0; i < winningCombinations.length; i++) {
        let combination = winningCombinations[i];
        if (
            board[combination[0]] &&
            board[combination[0]] == board[combination[1]] &&
            board[combination[1]] == board[combination[2]]
        ) {
            setWinner(board[combination[0]]);
            setFinished(true);
            return;
        }
    }

    if (!board.includes("")) {
        setFinished(true);
    }
}

export default checkWinner;