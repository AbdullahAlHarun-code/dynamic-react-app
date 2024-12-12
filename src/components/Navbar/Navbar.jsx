const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex items-center justify-between w-full">
      <div className="flex items-center">
        <img src="/alharun-white.png" alt="Logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mr-2" />
      </div>
      <h1 className="text-white text-xl md:text-3xl lg:text-5xl font-bold flex-grow text-center">Dynamic Counter App with React</h1>
    </nav>
  );
};

export default Navbar;