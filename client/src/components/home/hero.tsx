import heroImage from "@assets/generated_images/woman_using_green_light_therapy_device.png";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row h-[500px] md:h-[600px] lg:h-[700px] bg-black">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 h-full relative overflow-hidden">
        <img 
          src={heroImage} 
          alt="Medicube Age-R Device" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 h-full bg-white flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-[1.1] tracking-tight mb-8">
          THE ULTIMATE<br />
          6-IN-1<br />
          SKINCARE<br />
          BOOSTER
        </h1>
        
        <a href="/shop" className="group flex items-center gap-2 text-sm font-bold text-black border-b border-black w-fit pb-1 hover:opacity-70 transition-opacity uppercase tracking-widest">
          Shop Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
