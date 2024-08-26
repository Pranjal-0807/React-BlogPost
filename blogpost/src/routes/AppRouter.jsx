import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import About from "../Components/About";
import BlogList from "../Components/BlogList";
import Error from "../Components/Error";
import Contact from "../Components/Contact";
import NewBlog from "../Components/NewBlog";
import Footer from "../Components/Footer";
import BlogDetail from "../Components/BlogDetail";
// import Mode from "../Components/Mode";

const AppRouter = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/* <Mode /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newBlog" element={<NewBlog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default AppRouter;
