"use client"
import { GiSpellBook } from 'react-icons/gi';
const Footer = () => {
    return (
      <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {/* Logo */}
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <GiSpellBook className="h-8 w-8 text-purple-400 mr-2" />
                <span className="text-2xl font-bold">SpectralScribe</span>
              </div>
              <p className="text-gray-400 mb-6">
                The future of AI-assisted writing is here. Human creativity enhanced by machine precision.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'Facebook', 'LinkedIn', 'Instagram'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700">
                      {social.charAt(0)}
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Solutions</h3>
              <ul className="space-y-3">
                {['Fiction Writing', 'Business Content', 'Academic Papers', 'Scriptwriting'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-3">
                {['About', 'Careers', 'Blog', 'Press'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-3">
                {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Divider */}
          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SpectralScribe. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 text-sm">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;