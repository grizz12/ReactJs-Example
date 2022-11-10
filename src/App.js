import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./page/Blog";
import Book from "./page/Book";
import DetailBlog from "./page/DetailBlog";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="books">Book</Link>
        </li>
        <li>
          <Link to="news">News</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books" element={<Book />} />
        <Route path="news" element={<Blog />} />
        <Route path="news/:id" element={<DetailBlog />} />
      </Routes>
    </div>
  );
}

export default App;
