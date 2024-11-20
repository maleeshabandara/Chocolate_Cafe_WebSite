import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        {/* About Section */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0">
          <h1 className="font-semibold text-xl pb-4">Choc-fe</h1>
          <p className="text-sm leading-relaxed">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        
        {/* Links Section */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h1 className="font-medium text-xl pb-4">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#dishes"
            >
              Delicacies
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#about"
            >
              About
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#review"
            >
              Reviews
            </a>
          </nav>
        </div>

        {/* Menu Section */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h1 className="font-medium text-xl pb-4">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#dishes"
            >
              Our Delicacies
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="#menu"
            >
              Our Menu
            </a>
          </nav>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/5">
          <h1 className="font-medium text-xl pb-4">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:Choc-fe@gmail.com"
            >
              Choc-fe@gmail.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:0112456123"
            >
              0112-456123
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Whats app
            </a>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Developed by{" "}
          <span className="text-brightColor">Maleesha Bandara</span> | All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
