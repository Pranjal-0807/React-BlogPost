import { ThemeContextProvider } from "./ThemeContext";
import Mode from "../components/Mode";
import AppRouter from "../routes/AppRouter";
const ContextApp = () => {
  return (
    <>
      <ThemeContextProvider>
        <Mode />
        {/* <AppRouter /> */}
      </ThemeContextProvider>
    </>
  );
};

export default ContextApp;
