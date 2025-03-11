import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeader title="Our Story – Your Career Journey Partner" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-xl shadow-xl p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Resume Pros Kenya, we believe that every professional deserves a resumé that truly reflects their skills, experience, and potential. A well-crafted resumé is more than just a document—it's a powerful tool that can open doors to life-changing opportunities. That's why we are dedicated to helping job seekers stand out in today's competitive job market.
            </p>
            
            <h3 className="text-2xl font-montserrat font-semibold mb-4">Our Journey</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>We started with a passion for empowering job seekers, recognizing that many talented professionals struggle to secure interviews due to poorly structured resumés.</li>
              <li>Our mission was clear: to provide high-quality, customized resumés, cover letters, LinkedIn profiles, and portfolio websites that align with modern hiring trends.</li>
              <li>What began as a small initiative has now grown into a trusted career service, helping clients across Kenya and internationally.</li>
            </ul>
            
            <h3 className="text-2xl font-montserrat font-semibold mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Tailored Career Documents</strong> – We customize every resumé to highlight your strengths and meet industry standards.</li>
              <li><strong>Fast Turnaround Time</strong> – Get your resumé within 3 to 72 hours without compromising on quality.</li>
              <li><strong>Proven Success</strong> – Our services boast a 98% interview success rate, helping professionals land their dream jobs.</li>
              <li><strong>Global Reach</strong> – We've worked with clients in Kenya, USA, UK, Canada, UAE, Ghana, Nigeria, and Egypt.</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed">
              We are more than just a resumé-writing service—we are career transformation specialists. Whether you're a fresh graduate, a seasoned professional, or switching careers, we're here to craft a winning resumé that helps you land your next opportunity. Your success is our priority! 🚀
            </p>
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-montserrat font-medium text-gray-700 italic">
              "Our mission is to deliver fast, reliable, and personalized career assistance that helps you stand out in a competitive market."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
