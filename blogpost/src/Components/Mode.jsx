import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Mode = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      console.log("dark");
    } else {
      setTheme("light");
      console.log("light");
    }
  };

  const backgroundColor = theme === "light" ? "#ffffff" : "#333333";
  const color = theme === "light" ? "#000000" : "#ffffff";

  return (
    <div
      style={{ backgroundColor, color, padding: "20px", textAlign: "center" }}
    >
      <button onClick={handleTheme}>Mode</button>
    </div>
  );
};

export default Mode;
