import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#36454F] shadow-lg border-b border-[#708090]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => navigate("/")}
          >
            <div className="text-4xl">
              <span className="font-bold">🕉️</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
              திருக்குறள்
            </h1>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 bg-[#4A90E2] hover:bg-[#357ABD] text-white rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              title="முகப்பு பக்கம்"
            >
              <span className="text-xl">🏠</span>
              <span className="hidden md:inline font-semibold">முகப்பு</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
