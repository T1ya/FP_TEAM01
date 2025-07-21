import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={`w-full bg-[#ece6dc]/80 border-t border-gray-300 text-gray-800 text-sm pt-4 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* About Us */}
          <div>
            <h3 className="text-base font-semibold mb-2">About Us</h3>
            <p className="leading-relaxed">
              Our coffee shop is a place where every sip tells a story. Come in
              for a cup of warmth and comfort in the heart of the city.
            </p>
            <p className="mt-2 border-t-2">© 2025 team01. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[16px]" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-[16px]" />
                <span>+1 234 567 890</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-base font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-brown-700 transition"
              >
                <FaFacebookF />
                <span>Facebook</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-brown-700 transition"
              >
                <FaTwitter />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-brown-700 transition"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
