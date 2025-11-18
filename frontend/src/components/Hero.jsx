import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, Bus, Clock, Shield, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden py-2 sm:py-0" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0" style={{background: 'linear-gradient(135deg, hsla(214, 88%, 35%, 0.85), hsla(214, 88%, 45%, 0.85), hsla(214, 88%, 55%, 0.85))'}} />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-2 sm:mb-6 animate-fade-in">
          <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="text-sm sm:text-lg font-medium">Kampala, Uganda</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-6 animate-fade-in leading-tight">
          Book Your <span className="text-yellow-300">Bus Ticket</span>
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-8 max-w-3xl mx-auto text-white/90 animate-fade-in px-2">
          Fast, reliable, and affordable bus travel across Uganda. 
          Book your seat in just a few taps with Bookutu Technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in mb-4 sm:mb-12 px-4">
          <Button variant="hero" size="lg" className="group w-full sm:w-auto text-sm sm:text-base">
            <Bus className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Book Bus Ticket
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 w-full sm:w-auto text-sm sm:text-base">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-4xl mx-auto px-2">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <Clock className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-lg sm:text-2xl font-bold mb-1">5min</div>
            <div className="text-xs text-white/80">Avg. Wait Time</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-lg sm:text-2xl font-bold mb-1">24/7</div>
            <div className="text-xs text-white/80">Always Available</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-lg sm:text-2xl font-bold mb-1">100%</div>
            <div className="text-xs text-white/80">Safe & Secure</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <Bus className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 text-yellow-300" />
            <div className="text-lg sm:text-2xl font-bold mb-1">Best</div>
            <div className="text-xs text-white/80">Prices</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;