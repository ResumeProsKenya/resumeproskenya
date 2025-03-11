import { FaWhatsapp, FaFacebookF, FaInstagram, FaTelegramPlane, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TbBrandThreads } from "react-icons/tb";
import { BsTiktok } from "react-icons/bs";
import { SiBluesky } from "react-icons/si";
import { SOCIAL_LINKS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-3 mb-2">
              <div>
                <img src="https://thumbs2.imgbox.com/b9/f6/vRkIzuvG_t.png" alt="ResumeProsKenya Logo" className="h-16 w-auto" />
              </div>
              <h2 className="text-2xl font-montserrat font-bold">
                <span className="text-white">Resume</span><span className="text-red-600">Pros</span><span className="text-white">Kenya</span>
              </h2>
            </div>
            <p className="text-gray-400 mt-2">Elevating careers with professional documents.</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a 
              href={SOCIAL_LINKS.whatsapp}
              className="hover:text-green-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.facebook}
              className="hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.instagram}
              className="hover:text-pink-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.threads}
              className="hover:text-gray-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Threads"
            >
              <TbBrandThreads className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.tiktok}
              className="hover:text-gray-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <BsTiktok className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.telegram}
              className="hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.pinterest}
              className="hover:text-red-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
            >
              <FaPinterest className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.twitter}
              className="hover:text-gray-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a 
              href={SOCIAL_LINKS.bluesky}
              className="hover:text-blue-400 transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
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
