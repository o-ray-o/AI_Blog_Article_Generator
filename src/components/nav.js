import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Trip Candy Article Generator</h1>
          <ul>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blogs/create">New Blog</a>
            </li>
          </ul>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
