import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import BlogList from "../components/BlogList";

const AppRouter = ({blogs}) => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogList" element={<BlogList blogs=
          {blogs}/>} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
