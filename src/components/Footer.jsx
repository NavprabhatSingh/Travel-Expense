import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = [
    { name: 'Home', path: '/home', icon: 'fa-house' },
    { name: 'Contact', path: '/contact', icon: 'fa-address-book' },
    { name: 'Services', path: '/', icon: 'fa-box' },
    { name: 'About', path: '/about', icon: 'fa-circle-info' }
  ];

  return (
    <footer className="bg-black text-white mt-20 px-4 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-16">
        
        {/* Quick Links */}
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {footerLinks.map((link) => (
              <li key={link.name} className="flex items-center space-x-2">
                <i className={`fa-solid ${link.icon}`}></i>
                <Link to={link.path} className="hover:text-blue-400 transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Contact Us</h4>
          <p className="text-sm mb-2">📧 <a href="mailto:contact@navprabhat.com" className="hover:text-blue-400">contact@navprabhat.com</a></p>
          <p className="text-sm mb-2">📞 +91 12345 67890</p>
          <p className="text-sm">📍 123, Knowledge Street, India</p>
        </div>

        {/* Branding or Socials */}
        <div className="w-full md:w-1/3">
          <h4 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">Follow Us</h4>
          <div className="flex space-x-4 text-lg">
            <a href="https://twitter.com" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
            <a href="https://facebook.com" className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></a>
            <a href="https://linkedin.com" className="hover:text-blue-400"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} NavPrabhat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
