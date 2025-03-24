import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onSignUpClick?: () => void;
}

const Header = ({ onSignUpClick = () => {} }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            CabinetPortal
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/features"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            to="/pricing"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" className="font-medium">
              Log In
            </Button>
          </Link>
          <Button onClick={onSignUpClick} className="font-medium">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/features"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-3 pt-2 border-t">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="outline"
                  className="w-full justify-center font-medium"
                >
                  Log In
                </Button>
              </Link>
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  onSignUpClick();
                }}
                className="w-full justify-center font-medium"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
