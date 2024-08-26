import { ThemeContextProvider } from "./ThemeContext";
import Mode from "../Components/Mode";
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
