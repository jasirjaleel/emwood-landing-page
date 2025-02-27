
import { MapPin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 bg-neutral-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-display font-light mb-6">Contact Us</h3>
            <div className="flex items-center space-x-4">
              <Phone className="text-brand-primary" size={20} />
              <a href="tel:+919562420359" className="hover:text-brand-primary transition-colors">+91 95 62 4203 59</a>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-brand-primary" size={20} />
              <a href="mailto:emwoods@gmail.com" className="hover:text-brand-primary transition-colors">
                emwoods@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-brand-primary" size={20} />
              <span>Chentrappinni, Thrissur, Kerala, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-display font-light mb-6">Connect With Us</h3>
            <div className="flex space-x-6">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                <MapPin size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://wa.me/919562420359" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-brand-primary transition-colors"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/2133a38d-e1e9-4eee-9ac2-c84f81e6bf03.png"
                alt="EMWOODS Logo Symbol"
                className="h-12 brightness-0 invert"
              />
              <img
                src="/lovable-uploads/68aeffa9-909e-4fd1-a586-b537999b4b88.png"
                alt="EMWOODS Logo Text"
                className="h-10 brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} EMWOODS. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
