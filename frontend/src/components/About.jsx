import { Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                About Bookutu
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bookutu Technologies is Uganda's leading transportation and IT solutions company, 
                revolutionizing how people travel and do business. We specialize in bus booking services, 
                ride-hailing through Bookutu Rides, and comprehensive technology solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our mission is to digitize transportation and provide cutting-edge technology solutions 
                that empower businesses and communities. From mobile apps to AI solutions, we're building 
                the future of technology in Uganda.
              </p>
              <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="font-semibold text-foreground flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  "Bookutu" means "book it" – your one-stop solution for transportation and technology!
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Bus transportation" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;