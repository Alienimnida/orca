import { Switch } from "@mui/material";
import { Brightness4, WbSunny } from "@mui/icons-material";
import { useState } from "react"
const Nav = ({ authToken, setShowModal, showModal, setIsSignUp }) => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);
  const toggleDarkTheme = () => {
    setToggleDarkMode(!toggleDarkMode);
    document.body.classList.toggle("dark");
  };
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };

  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center">
        {/* Navbar content here */}

      </div>
      <div className="flex items-center">
        {/* Login Button */}
        {!authToken && (
          <a
            className="bg-red-800 hover:bg-green-500 hover:border-2 hover:border-green-800 text-white font-mono py-2 px-4 rounded"
            onClick={handleClick}
            // disabled={showModal}
            href="#login"
          >
            Log in
          </a>)}
        {/* Dark mode toggle */}
        <Switch
          checked={toggleDarkMode}
          onChange={toggleDarkTheme}
          icon={<WbSunny />}
          checkedIcon={<Brightness4 />}
        />
      </div>
    </nav>
  );
};
export default Nav;