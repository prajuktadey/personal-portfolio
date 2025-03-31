import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ThemeContext = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<ThemeContext | undefined>(undefined);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  // Check if user has previously set a preference
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  // Update the HTML class when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    // Store the preference
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}