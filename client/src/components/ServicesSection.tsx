import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { FaWhatsapp } from "react-icons/fa";

interface ServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  whatsappLink: string;
  index: number;
}

function ServiceCard({ title, description, imageUrl, whatsappLink, index }: ServiceProps) {
  return (
    <motion.div 
      className="service-card bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
    >
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" width="500" height="300" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        <a 
          href={whatsappLink} 
          className="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-lg transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="inline mr-2" /> WhatsApp Now
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const services = [
    {
      title: "Professional/ATS-Compliant CV/Resumé Writing",
      description: "Make a lasting impression with a professionally crafted, ATS-compliant resumé that gets you noticed! Stand out from the competition, land interviews instantly, and open doors to exciting career opportunities.",
      imageUrl: "https://i.imgur.com/1AOv3mM.jpg",
      whatsappLink: "https://wa.me/254706874794?text=Hi%20Resume%20Pros%20Kenya%2C%20I%E2%80%99d%20like%20to%20get%20a%20professional%20ATS-compliant%20CV%20that%20stands%20out"
    },
    {
      title: "Cover Letters Customization",
      description: "Craft a compelling cover letter that tells your unique story, captures attention, and gets you interview calls instantly! Let your first impression be your winning advantage.",
      imageUrl: "https://i.imgur.com/LKiDDD8.jpg",
      whatsappLink: "https://wa.me/254706874794?text=Hi%20Resume%20Pros%20Kenya%2C%20I%E2%80%99m%20interested%20in%20a%20customized%20cover%20letter%20that%20truly%20represents%20my%20professional%20journey"
    },
    {
      title: "LinkedIn Profiles Optimisation",
      description: "Transform your LinkedIn profile into a powerful career magnet that attracts recruiters, opens new opportunities, and gets you noticed instantly.",
      imageUrl: "https://i.imgur.com/JW8p29R.jpg",
      whatsappLink: "https://wa.me/254706874794?text=Hi%20Resume%20Pros%20Kenya%2C%20I%E2%80%99d%20like%20to%20optimize%20my%20LinkedIn%20profile%20to%20boost%20my%20career%20opportunities"
    },
    {
      title: "Portfolio Website Creation",
      description: "Showcase your skills and achievements with a stunning custom & modern portfolio website! Make a lasting impression, attract clients or employers, and elevate your professional brand.",
      imageUrl: "https://i.imgur.com/Q22grmZ.jpg",
      whatsappLink: "https://wa.me/254706874794?text=Hi%20Resume%20Pros%20Kenya%2C%20I%E2%80%99m%20looking%20to%20create%20a%20standout%20portfolio%20website%20that%20captures%20my%20professional%20journey"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Our Services" 
          subtitle="We offer comprehensive career document services tailored to your professional needs."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              whatsappLink={service.whatsappLink}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
