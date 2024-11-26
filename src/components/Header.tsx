import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Search, User } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Career Paths' },
    { path: '/church-finder', label: 'Find Church' },
    { path: '/business-directory', label: 'Business Directory' },
    { path: '/business-support', label: 'Business Support' }
  ];

  const handleSearch = () => {
    // Implement search functionality
    console.log('Search clicked');
  };

  const handleAccount = () => {
    // Implement account functionality
    console.log('Account clicked');
  };

  const handleSupport = () => {
    navigate('/support');
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 py-4">
            <Heart className="w-8 h-8 text-patriot-red" />
            <span className="text-xl font-bold text-patriot-navy">The Mustard Seed</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`transition-colors ${
                  isActive(path)
                    ? 'text-patriot-red font-semibold'
                    : 'text-patriot-navy hover:text-patriot-red'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={handleSearch}
              className="p-2 text-patriot-navy hover:text-patriot-red transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <button 
              onClick={handleAccount}
              className="p-2 text-patriot-navy hover:text-patriot-red transition-colors"
            >
              <User className="w-5 h-5" />
            </button>
            <button 
              onClick={handleSupport}
              className="bg-patriot-red text-white px-4 py-2 rounded-full hover:bg-patriot-crimson transition-colors"
            >
              Support Now
            </button>
          </div>

          <button
            className="md:hidden p-2 text-patriot-navy"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`transition-colors ${
                    isActive(path)
                      ? 'text-patriot-red font-semibold'
                      : 'text-patriot-navy hover:text-patriot-red'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <button 
                  onClick={() => {
                    handleSearch();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-patriot-navy hover:text-patriot-red transition-colors"
                >
                  <Search className="w-5 h-5" />
                  Search
                </button>
                <button 
                  onClick={() => {
                    handleAccount();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-patriot-navy hover:text-patriot-red transition-colors"
                >
                  <User className="w-5 h-5" />
                  Account
                </button>
                <button 
                  onClick={handleSupport}
                  className="bg-patriot-red text-white px-4 py-2 rounded-full hover:bg-patriot-crimson transition-colors"
                >
                  Support Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}