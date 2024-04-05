function restartGame(setBoard, setCurrentPlayer, setWinner, setFinished) {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("O");
    setWinner(null);
    setFinished(false);
}

export default restartGame;