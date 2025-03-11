import { FaWhatsapp, FaFacebookF, FaInstagram, FaTelegramPlane, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandThreads } from "react-icons/tb";
import { BsTiktok } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-montserrat font-bold">
              <span className="text-white">Resume</span><span className="text-red-600">Pros</span><span className="text-white">Kenya</span>
            </h2>
            <p className="text-gray-400 mt-2">Elevating careers with professional documents.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a 
              href="https://wa.me/254706874794" 
              className="hover:text-green-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-400 transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-pink-400 transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-black transition duration-300"
              aria-label="Threads"
            >
              <TbBrandThreads className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-black transition duration-300"
              aria-label="TikTok"
            >
              <BsTiktok className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-400 transition duration-300"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-red-400 transition duration-300"
              aria-label="Pinterest"
            >
              <FaPinterest className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-gray-400 transition duration-300"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a 
              href="#" 
              className="hover:text-blue-400 transition duration-300"
              aria-label="BlueSky"
            >
              <SiBluesky className="text-2xl" />
            </a>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Resume Pros Kenya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
