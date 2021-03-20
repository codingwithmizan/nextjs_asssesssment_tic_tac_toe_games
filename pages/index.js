import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { setPlayer } from "../state";
const Home = () => {
  const [playerOne, setPlayerOne] = useState(null);
  const [playerTwo, setPlayerTwo] = useState(null);

  const dispatch = useDispatch();
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(playerOne, playerTwo);
    dispatch(setPlayer(playerOne, playerTwo));
    router.push("/gamescreen");
  };

  return (
    <div className="w-2/4 mx-auto bg-blue-500 rounded-lg box-border p-8 mt-20">
      <h2 className="xl:text-3xl text-xl mb-3 text-white text-center">
        Welcome to tic tac toe games
      </h2>
      <h4 className="xl:text-2xl text-lg text-white text-center">
        Enter the Player Name
      </h4>
      <div className="text-white mt-6 xl:ml-20">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="xl:text-lg">Player 1 :</label>
            <input
              required
              type="text"
              className="input"
              onChange={(e) => setPlayerOne(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="xl:text-lg">Player 2 :</label>
            <input
              required
              type="text"
              className="input"
              onChange={(e) => setPlayerTwo(e.target.value)}
            />
          </div>
          <div className="my-4">
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-500 cursor-pointer py-2 px-5 rounded-lg text-sm"
            >
              Start Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
