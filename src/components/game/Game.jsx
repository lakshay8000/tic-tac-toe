import { useEffect, useState } from "react";
import "./game.css";
import Cell from "../cell/Cell";
import checkWinner from "../../helpers/checkWinner";
import restartGame from "../../helpers/restartGame";


function Game() {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("O");
    const [winner, setWinner] = useState(null);
    const [finished, setFinished] = useState(false);


    function onCellClick(e, idx) {
        if (!finished && board[idx] == "") {
            if (currentPlayer == "X") {
                const updatedBoard = [...board];
                updatedBoard[idx] = "O";
                setBoard(updatedBoard);
                setCurrentPlayer("O");
            }
            else {
                const updatedBoard = [...board];
                updatedBoard[idx] = "X";
                setBoard(updatedBoard);
                setCurrentPlayer("X");
            }
        }
    }

    useEffect(() => {
        checkWinner(board, setWinner, setFinished);
    }, [board]);


    return (
        <div className="container d-flex justify-content-center align-items-center">
            {
                (!finished) &&
                <div className="tic-tac-toe-wrapper d-flex flex-column">
                    <h1 className="heading text-center">Tic-Tac-Toe</h1>

                    <div className="board d-flex flex-row flex-wrap">
                        {
                            board &&
                            board.map((value, idx) => {
                                return (
                                    <Cell
                                        key={idx}
                                        idx={idx}
                                        cellValue={value}
                                        handleClick={onCellClick}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            }

            {
                finished &&
                <div className="result container d-flex flex-column align-items-center">
                    {
                        winner ?
                            <div>{winner} wins</div>
                            :
                            <div>Draw</div>
                    }

                    <button
                        className="btn btn-primary"
                        onClick={() => restartGame(setBoard, setCurrentPlayer, setWinner, setFinished)}
                    >
                        Play again
                    </button>
                </div>
            }
        </div>
    )
}

export default Game;