import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import BlogList from "../components/BlogList";
import Error from "../components/Error";
import Contact from "../components/Contact";
import NewBlog from "../components/NewBlog";
import Footer from "../components/Footer";
import BlogDetail from "../components/BlogDetail";

const AppRouter = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
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
