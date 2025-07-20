import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";


interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`text-black py-3 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">About Us</h3>
            <p className="text-black text-sm">
              Our coffee shop is a place where every sip tells a story. Come in
              for a cup of warmth and comfort in the heart of the city.
            </p>
          </div>

          <div className="ml-16">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <ul>
              <li>
                <Link to={ROUTES.HOME} className="text-black hover:text-gray-500 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-500 text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-black hover:text-gray-500 text-sm">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-black text-sm">Email: info@example.com</p>
            <p className="text-black text-sm">Phone: +1 234 567 890</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-3 mt-3 border-t border-gray-700">
          <p className="text-black text-sm">
            © 2025 team01. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-500 text-sm">
              Facebook
            </a>
            <a href="#" className="text-black hover:text-gray-500 text-sm">
              Twitter
            </a>
            <a href="#" className="text-black hover:text-gray-500 text-sm">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
