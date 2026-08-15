import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );
  console.log("this is theme->", mode);

  return (
    <nav className="h-16 w-full flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <h1
          onClick={() => navigate("/")}
          className="font-bold text-2xl cursor-pointer"
        >
          EaseUi
        </h1>

        <div className="hidden sm:flex items-center bg-background rounded-md px-3 py-1.5 shadow-xs border border-border">
          <Search size={18} className="text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components"
            className="ml-2 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <ul className="hidden md:flex items-center gap-6 text-muted-foreground">
        <li
          onClick={() => navigate("components")}
          className="cursor-pointer hover:text-foreground"
        >
          Components
        </li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Templates</li>
        {mode === "dark" && (
          <li
            className="cursor-pointer p-2 rounded-full hover:bg-muted"
            onClick={() => dispatch(toggleTheme())}
          >
            <Sun size={20} className="text-yellow-400" />
          </li>
        )}
        {mode === "light" && (
          <li
            className="cursor-pointer p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => dispatch(toggleTheme())}
          >
            <Moon size={20} className="text-muted-foreground" />
          </li>
        )}
      </ul>

      {/* Mobile Hamburger */}
      <button className="md:hidden text-foreground">☰</button>
    </nav>
  );
};

export default Navbar;
