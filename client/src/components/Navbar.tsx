import { useState, useEffect } from "react";
import SocialIcon from "./SocialIcon";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTelegramPlane, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandThreads } from "react-icons/tb";
import { BsTiktok } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";
import { SOCIAL_LINKS } from "../lib/constants";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full bg-white z-50 py-4 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-montserrat font-bold">
            <span className="text-black">Resume</span><span className="text-red-600">Pros</span><span className="text-black">Kenya</span>
          </h1>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="nav-link font-montserrat font-medium hover:text-red-600 transition duration-300">Home</a>
          <a href="#services" className="nav-link font-montserrat font-medium hover:text-red-600 transition duration-300">Services</a>
          <a href="#reviews" className="nav-link font-montserrat font-medium hover:text-red-600 transition duration-300">Reviews</a>
          <a href="#about" className="nav-link font-montserrat font-medium hover:text-red-600 transition duration-300">About Us</a>
          <a href="#contact" className="nav-link font-montserrat font-medium hover:text-red-600 transition duration-300">Contact</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="hidden lg:flex items-center space-x-4">
          <SocialIcon href="https://wa.me/254706874794" icon={<FaWhatsapp className="text-lg" />} color="text-green-600" />
          <SocialIcon href="#" icon={<FaFacebookF />} color="text-blue-600" />
          <SocialIcon href="#" icon={<FaInstagram />} color="text-pink-600" /> 
          <SocialIcon href="#" icon={<TbBrandThreads />} color="text-black" />
          <SocialIcon href="#" icon={<BsTiktok />} color="text-black" />
          <SocialIcon href="#" icon={<FaTelegramPlane />} color="text-blue-500" />
          <SocialIcon href="#" icon={<FaPinterest />} color="text-red-600" />
          <SocialIcon href="#" icon={<FaXTwitter />} color="text-black" />
          <SocialIcon href="#" icon={<SiBluesky />} color="text-blue-400" />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white w-full`}>
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
          <a href="#home" className="nav-link py-2 font-montserrat font-medium" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#services" className="nav-link py-2 font-montserrat font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#reviews" className="nav-link py-2 font-montserrat font-medium" onClick={() => setIsMenuOpen(false)}>Reviews</a>
          <a href="#about" className="nav-link py-2 font-montserrat font-medium" onClick={() => setIsMenuOpen(false)}>About Us</a>
          <a href="#contact" className="nav-link py-2 font-montserrat font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
          
          <div className="flex flex-wrap items-center gap-4 py-2">
            <SocialIcon href="https://wa.me/254706874794" icon={<FaWhatsapp className="text-lg" />} color="text-green-600" />
            <SocialIcon href="#" icon={<FaFacebookF />} color="text-blue-600" />
            <SocialIcon href="#" icon={<FaInstagram />} color="text-pink-600" />
            <SocialIcon href="#" icon={<TbBrandThreads />} color="text-black" />
            <SocialIcon href="#" icon={<BsTiktok />} color="text-black" />
            <SocialIcon href="#" icon={<FaTelegramPlane />} color="text-blue-500" />
            <SocialIcon href="#" icon={<FaPinterest />} color="text-red-600" />
            <SocialIcon href="#" icon={<FaXTwitter />} color="text-black" />
            <SocialIcon href="#" icon={<SiBluesky />} color="text-blue-400" />
          </div>
        </div>
      </div>
    </nav>
  );
}
