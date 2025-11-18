import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bus, Smartphone, Code, Brain, Database, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bus,
      title: "Bus Booking",
      description: "Book your bus tickets online with our easy-to-use mobile app",
      features: ["Seat Selection", "Instant Booking", "Digital Tickets"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Car,
      title: "Bookutu Rides",
      description: "On-demand ride-hailing service for quick city transportation",
      features: ["Fast Pickup", "Safe Drivers", "Affordable Rates"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Code,
      title: "Tech Solutions",
      description: "Custom systems development, DevOps, and AI solutions for businesses",
      features: ["Mobile Apps & Websites", "Custom Enterprise Systems", "AI Integration"],
      color: "from-orange-500 to-red-500"
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From bus booking to tech solutions, we're your complete transportation and IT partner
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 group"
            >
              <CardHeader>
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <CardTitle className="text-2xl text-center">{service.title}</CardTitle>
                <CardDescription className="text-center text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;