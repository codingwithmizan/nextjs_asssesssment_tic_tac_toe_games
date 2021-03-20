import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { resetPlayer, resetBoard } from "../state";
const winner = () => {
  const router = useRouter();
  const players = useSelector((state) => state.players);
  const dispatch = useDispatch();
  const finalwinner = players.winnerPlayer;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(resetBoard());
    dispatch(resetPlayer());
    router.push("/gamescreen");
  };

  useEffect(() => {
    console.log("games");
  }, []);
  return (
    <div className="w-2/4 mx-auto  mb-48">
      <h2 className="text-4xl font-bold text-center pb-4 text-pink-600">
        Final Results of the Games Series
      </h2>
      {finalwinner && (
        <h2 className="text-2xl text-green-500 text-center pb-3">
          ***** Finally the player{" "}
          <span className="text-purple-500 uppercase font-bold">
            {finalwinner}
          </span>{" "}
          won the series out of 5 games *****
        </h2>
      )}
      {finalwinner === null && (
        <h2 className="text-2xl text-green-500 text-center">
          ***** The game is drawn *****
        </h2>
      )}

      <h2 className="text-center text-3xl text-purple-500 font-semibold pt-6 mb-3">
        Final Score
      </h2>
      <div className="mb-4 border border-green-400 p-6 grid grid-cols-2 xl:text-3xl font-semibold text-yellow-600">
        <div className="mb-3 ">
          <h2>
            Player Name:{" "}
            <span className="text-indigo-500 uppercase font-bold">
              {players.player1.name}
            </span>{" "}
          </h2>
          <h2 className="xl:text-3xl font-semibold text-yellow-600">
            Total Points :{" "}
            <span className="text-indigo-500">{players.player1.points}</span>
          </h2>
        </div>
        <div className="border-l border-blue-700 pl-6">
          <h2>
            Player Name :{" "}
            <span className="text-indigo-500 uppercase font-bold">
              {players.player2.name}
            </span>
          </h2>
          <h2>
            Total Points :{" "}
            <span className="text-indigo-500">{players.player2.points}</span>
          </h2>
        </div>
      </div>
      <div className="w-1/4 mx-auto mt-8 flex justify-center">
        <button
          onClick={(e) => handleClick(e)}
          className="text-lg bg-pink-600 hover:bg-pink-500 text-white rounded-lg py-3 px-4"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default winner;
