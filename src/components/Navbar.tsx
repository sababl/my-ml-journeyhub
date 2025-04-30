
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-primary">SABA BELAL</span>
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/")
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/projects")
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/resume")
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Resume
            </Link>
            <Link
              to="/blog"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/blog")
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Blog
            </Link>
            <Link
              to="/chatbot"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                isActive("/chatbot")
                  ? "text-accent border-b-2 border-accent"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Chatbot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
