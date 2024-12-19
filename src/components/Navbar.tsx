import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Crime.si</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#map" className="text-gray-300 hover:text-white transition-colors">
              Map
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#map"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Map
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button className="w-full text-left bg-primary hover:bg-primary/90 text-white px-3 py-2 rounded-md transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;