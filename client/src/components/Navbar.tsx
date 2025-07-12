import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Gallery" },
    { path: "/letter", label: "Letter" },
    { path: "/timeline", label: "Timeline" },
    { path: "/reasons", label: "Reasons" },
    { path: "/wishes", label: "Wishes" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div 
              className="font-playfair text-2xl font-bold text-hot-pink cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💖 My Love
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <motion.span
                  className={`text-gray-700 hover:text-hot-pink transition-colors duration-300 font-medium cursor-pointer ${
                    location === item.path ? "text-hot-pink" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-hot-pink"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="fas fa-bars text-xl"></i>
            </motion.button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link key={item.path} href={item.path}>
                    <motion.span
                      className={`text-gray-700 hover:text-hot-pink transition-colors duration-300 cursor-pointer block ${
                        location === item.path ? "text-hot-pink" : ""
                      }`}
                      whileHover={{ x: 10 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
