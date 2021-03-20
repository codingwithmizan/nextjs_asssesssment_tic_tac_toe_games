const Square = ({ value, onClick }) => {
  return <button className='bg-blue-400 border-2 border-blue-700 hover:bg-blue-300 p-2 cursor-pointer ' onClick={onClick}>{value}</button>;
};

export default Square;
