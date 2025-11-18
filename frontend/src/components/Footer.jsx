import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Bookutu Technologies
            </h3>
            <p className="text-muted-foreground mb-4">
              Uganda's leading transportation and IT solutions company. From bus booking 
              to ride-hailing and custom tech solutions, we're digitizing the future.
            </p>
            <div className="flex items-start gap-2 text-muted-foreground mb-2">
              <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
              <span>Central Business District, Kampala, Uganda</span>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>+211 XXX XXX XXX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@bookutu.ug</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-foreground">Business Hours</h5>
              <p className="text-sm text-muted-foreground">Mon-Sun: 6:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Bookutu Technologies. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;