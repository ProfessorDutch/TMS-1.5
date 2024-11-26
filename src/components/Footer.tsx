import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@mustardseed.org';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <footer className="bg-patriot-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">The Mustard Seed</h3>
            <p className="text-patriot-cream mb-4">
              Planting seeds of faith, hope, and opportunity for the next generation.
            </p>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-patriot-red" />
              <span className="text-patriot-cream">Moving mountains through faith</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-patriot-cream transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-patriot-cream transition-colors">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-patriot-cream transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/stories" className="hover:text-patriot-cream transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={handleEmailClick}
                  className="flex items-center gap-2 hover:text-patriot-cream transition-colors"
                >
                  <Mail className="w-5 h-5 text-patriot-cream" />
                  jason@themustardseed.co
                </button>
              </li>
              <li>
                <button 
                  onClick={handlePhoneClick}
                  className="flex items-center gap-2 hover:text-patriot-cream transition-colors"
                >
                  <Phone className="w-5 h-5 text-patriot-cream" />
                  (123) 456-7890
                </button>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-patriot-cream" />
                <span>1234 Faith Street, Grace City, GC 12345</span>
              </li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect & Legal</h4>
            <div className="flex gap-4 mb-6">
              <a href="https://facebook.com/mustardseedministry" target="_blank" rel="noopener noreferrer" className="hover:text-patriot-cream transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/mustardseedmin" target="_blank" rel="noopener noreferrer" className="hover:text-patriot-cream transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/mustardseedministry" target="_blank" rel="noopener noreferrer" className="hover:text-patriot-cream transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://youtube.com/@mustardseedministry" target="_blank" rel="noopener noreferrer" className="hover:text-patriot-cream transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-patriot-cream transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-patriot-cream transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-patriot-blue text-center text-patriot-cream">
          <p>&copy; {new Date().getFullYear()} The Mustard Seed. Faith in Action: Changing Lives, One Seed at a Time.</p>
        </div>
      </div>
    </footer>
  );
}