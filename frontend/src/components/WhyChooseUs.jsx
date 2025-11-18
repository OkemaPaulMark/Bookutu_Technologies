import { Shield, Clock, DollarSign, Star, Users, Award } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified buses and drivers for your peace of mind",
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Book your bus ticket anytime, anywhere in seconds",
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Competitive rates with transparent pricing",
    },
    {
      icon: Star,
      title: "Digital Experience",
      description: "Modern app with seat selection and digital tickets",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Why Choose Us?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of bus travel with Bookutu Technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;