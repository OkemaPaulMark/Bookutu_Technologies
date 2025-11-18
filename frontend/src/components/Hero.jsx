import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Bus, Clock, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, hsla(214, 88%, 35%, 0.85), hsla(214, 88%, 45%, 0.85), hsla(214, 88%, 55%, 0.85))'}} />
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
          <MapPin className="h-5 w-5" />
          <span className="text-lg font-medium">Kampala, Uganda</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Book Your <span className="text-yellow-300">Bus Ticket</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in">
          Fast, reliable, and affordable bus travel across Uganda. 
          Book your seat in just a few taps with Bookutu Technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in mb-12">
          <Button variant="hero" size="lg" className="group">
            <Bus className="mr-2 h-5 w-5" />
            Book Bus Ticket
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Clock className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold mb-1">5min</div>
            <div className="text-xs text-white/80">Avg. Wait Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Shield className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold mb-1">24/7</div>
            <div className="text-xs text-white/80">Always Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Star className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold mb-1">100%</div>
            <div className="text-xs text-white/80">Safe & Secure</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <Bus className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-2xl font-bold mb-1">Best</div>
            <div className="text-xs text-white/80">Prices</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;