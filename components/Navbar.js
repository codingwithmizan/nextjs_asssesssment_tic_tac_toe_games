import Link from "next/link";
const Navbar = () => {
  return (
    <nav className=" w-full bg-gray-100 h-20 border-b border-gray-300  text-gray-500 uppercase shadow">
      <div className=" px-24 pt-6">
        <div className="flex justify-between ">
          <div>
            <Link href="/">
              <a className="text-2xl font-semibold uppercase">Tic Tac Toe</a>
            </Link>
          </div>
          <div className="space-x-4 ">
            <Link href="/">
              <a className="hover:text-blue-600 font-semibold">
                Start Games with New Player
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
