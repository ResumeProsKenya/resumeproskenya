import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import SocialIcon from "./SocialIcon";
import { FaWhatsapp, FaEnvelope, FaFacebookF, FaInstagram, FaTelegramPlane, FaPinterest } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Let's Get in Touch!" 
          subtitle="Your dream job is just a message away."
        />
        <p className="text-gray-600 mt-4 text-center mb-12">Fill out our simple form below, or drop us a message directly on WhatsApp!</p>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLScO6EGcLu0Wty0MHXSSNQIjM4XtkXFW-_cdw3-4BSHqDaMc2Q/viewform?embedded=true" 
              width="100%" 
              height="800" 
              frameBorder="0" 
              title="Contact Form"
            >
              Loading…
            </iframe>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h3 className="text-2xl font-montserrat font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-red-600 mr-4 mt-1">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-lg">Email</h4>
                    <a 
                      href="mailto:ResumeProsKenya@gmail.com" 
                      className="text-gray-600 hover:text-red-600 transition duration-300"
                    >
                      ResumeProsKenya@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-green-500 mr-4 mt-1">
                    <FaWhatsapp className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-medium text-lg">WhatsApp</h4>
                    <a 
                      href="https://wa.me/254706874794" 
                      className="text-gray-600 hover:text-green-500 transition duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +254 706 874 794
                    </a>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h4 className="font-montserrat font-medium text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <SocialIcon href="#" icon={<FaFacebookF />} color="text-blue-600" />
                    <SocialIcon href="#" icon={<FaInstagram />} color="text-pink-600" />
                    <SocialIcon href="#" icon={<FaTelegramPlane />} color="text-blue-500" />
                    <SocialIcon href="#" icon={<FaPinterest />} color="text-red-600" />
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-gray-50 rounded-lg text-center">
                <p className="text-gray-700">We're here to help you shine. Reach out and let's craft your success story together!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
