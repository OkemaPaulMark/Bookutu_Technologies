import { Smartphone, MapPin, Armchair, Ticket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Open the App",
      description: "Launch the Bookutu bus booking app on your smartphone",
    },
    {
      icon: MapPin,
      title: "Choose Your Trip",
      description: "Select your departure and destination cities with travel date",
    },
    {
      icon: Armchair,
      title: "Select Your Seat",
      description: "Pick your preferred seat from our interactive seat map",
    },
    {
      icon: Ticket,
      title: "Get Your Ticket",
      description: "Confirm booking and receive your digital bus ticket instantly",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            How to Book Your Bus
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Booking your bus ticket has never been easier. Just four simple steps to secure your seat
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg hover:scale-110 transition-transform">
                  <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-blue-600 opacity-30" />
                )}
                
                <div className="relative z-10 text-primary px-4 py-2 mb-4 text-sm font-bold">
                  Step {index + 1}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;