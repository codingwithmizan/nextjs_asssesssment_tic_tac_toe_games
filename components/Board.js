import Square from "./Square";
const Board = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-3 border-4 border-blue-800 text-white text-3xl font-bold w-80 h-80 mx-auto rounded-xl">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
