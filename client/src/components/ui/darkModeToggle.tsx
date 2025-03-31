import { useDarkMode } from "@/hooks/useDarkMode";
import { FaMoon, FaSun } from "react-icons/fa";

export function DarkModeToggle() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? (
        <FaSun className="text-xl text-yellow-500" />
      ) : (
        <FaMoon className="text-xl text-gray-700" />
      )}
    </button>
  );
}