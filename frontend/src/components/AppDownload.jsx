import { Button } from "@/components/ui/button";
import { Smartphone, Bell, Download, Star, Shield, Zap } from "lucide-react";

const AppDownload = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
              <Bell className="w-5 h-5" />
              <span className="font-semibold">Coming Soon</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get the Bookutu Bus App
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Download our bus booking app now and start booking your tickets instantly. 
              Available on both iOS and Android platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all shadow-lg"
            >
              <Smartphone className="mr-2 h-5 w-5" />
              Download Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Download className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Easy Booking</h3>
                <p className="text-white/80 text-sm">Book your bus ticket in just a few taps</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Seat Selection</h3>
                <p className="text-white/80 text-sm">Choose your preferred seat from our seat map</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Digital Tickets</h3>
                <p className="text-white/80 text-sm">Get instant digital tickets on your phone</p>
              </div>
            </div>
          </div>

          {/* App Store Badges */}
          <div className="mt-12">
            <p className="text-white/70 mb-4">Available on</p>
            <div className="flex justify-center gap-4">
              <a href="#" className="hover:scale-105 transition-transform">
                <img 
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
                  alt="Download on App Store" 
                  className="h-12"
                />
              </a>
              <a href="#" className="hover:scale-105 transition-transform">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;