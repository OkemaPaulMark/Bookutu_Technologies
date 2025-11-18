import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: "+256 76211 0420",
      description: "Mon-Sun 6AM-10PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@bookutu.ug",
      description: "We'll respond within 12 hours"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Kampala, Uganda",
      description: "Central Business District"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our bus booking app or tech services? We're here to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-xl border">
              <div className="mb-6">
                <MessageCircle className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
                <p className="text-muted-foreground">Fill out the form below and we'll get back to you soon.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                     
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <Input
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <Textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    className="min-h-[120px]"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-xl border hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-primary font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card p-6 rounded-xl border">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                  <h4 className="font-bold text-lg">Business Hours</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">6:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">7:00 AM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;