import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Board from "../components/Board";
import { calculateWinner } from "../utils/helper";
import {
  setBoard,
  setNextPlayer,
  addPointToPlayerOne,
  addPointToPlayerTwo,
  addnumOfPlay,
  resetBoard,
  setWinner,
} from "../state";
const GameScreen = () => {
  const router = useRouter();
  const board = useSelector((state) => state.board);
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const winner = calculateWinner(board);
  const cPlayer = players.player1.name;
  const nPlayer = players.player2.name;
  const isNextPlayer = players.isNext;

  useEffect(() => {
    if (winner) {
      if (winner === "X") {
        dispatch(addPointToPlayerOne(2));
        dispatch(addPointToPlayerTwo(1));
      } else if (winner === "O") {
        dispatch(addPointToPlayerOne(1));
        dispatch(addPointToPlayerTwo(2));
      } else {
        dispatch(addPointToPlayerOne(0));
        dispatch(addPointToPlayerTwo(0));
      }
    }
  }, [winner]);

  const handleClick = (e) => {
    const boardCopy = [...board];
    if (winner || boardCopy[e]) return;
    boardCopy[e] = isNextPlayer ? "X" : "O";
    dispatch(setBoard(boardCopy));
    dispatch(setNextPlayer());
  };

  const handleNextGame = () => {
    if (players.noOfPlay < 5) {
      dispatch(addnumOfPlay());
      dispatch(resetBoard());
    } else {
      dispatch(setWinner());
      router.push("/winnerscreen");
    }
  };
  return (
    <div>
      <div className="text-center mb-8 border border-gray-400 p-2 w-2/6 mx-auto">
        <h2 className="text-2xl text-yellow-600">
          Number of Play {players.noOfPlay} times
        </h2>
        <h2 className="text-xl text-green-600 pt-2">
          Player{" "}
          <span className="uppercase font-bold text-purple-600">{cPlayer}</span>{" "}
          : {players.player1.points} points
        </h2>
        <h2 className="text-xl text-green-600">
          Player{" "}
          <span className="uppercase font-bold text-purple-600">{nPlayer}</span>{" "}
          : {players.player2.points} points
        </h2>
        <div>
          <p className="pt-2 text-lg text-purple-500">
            {winner
              ? "Winner the game: " + (winner === "X" ? cPlayer : nPlayer)
              : "Next Player: " + (isNextPlayer ? cPlayer : nPlayer)}
          </p>
        </div>
      </div>
      <Board squares={board} onClick={(e) => handleClick(e)} />
      <div className="w-1/6 mx-auto mt-6 flex justify-center">
        <button
          onClick={handleNextGame}
          className="bg-pink-600 hover:bg-pink-500  py-3 px-5 rounded-xl text-white "
        >
          {players.noOfPlay < 5 ? "Next Game" : "Finish Game"}
        </button>
      </div>
    </div>
  );
};

export default GameScreen;
