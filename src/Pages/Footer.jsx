const Footer = () => {
    return (
      <footer id="contact" className="bg-gradient-to-b from-black to-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            Vikrant <span className="text-blue-400">Prajapati</span>
          </div>
  
          {/* Navigation Links */}
          <nav className="mt-4 md:mt-0 flex gap-6 text-gray-400">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
  
          {/* Social Media Links */}
          <div className="mt-4 md:mt-0 flex gap-4">
            <a href="https://github.com/PrajapatiVikrant" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-gray-300"></i>
            </a>
            <a href="https://www.linkedin.com/in/vikrantprajapati" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-gray-300"></i>
            </a>
            <a href="mailto:prajapativikrant2020@gmail.com">
              <i className="fas fa-envelope text-xl hover:text-gray-300"></i>
            </a>
          </div>
        </div>
  
        {/* Copyright */}
        <div  className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Vikrant Prajapati. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  