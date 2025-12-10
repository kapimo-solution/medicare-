import { TopBar, Header } from "@/components/layout/header";
import { Clock, Tag } from "lucide-react";

export default function Promotion() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-black uppercase tracking-tight mb-8 text-center">Special Offers</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Promo Card 1 */}
          <div className="relative h-[400px] bg-[#071135] text-white p-8 flex flex-col justify-center overflow-hidden group cursor-pointer">
            <div className="absolute top-4 left-4 bg-red-600 text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Limited Time
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">AGE-R BOOSTER PRO<br/>LAUNCH SPECIAL</h2>
              <p className="text-gray-300 mb-8 max-w-sm">Get the complete set with 4 free gifts including the Collagen Jelly Cream.</p>
              <button className="bg-white text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors w-fit">
                Shop The Set
              </button>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-900/50 rounded-full blur-3xl -z-0 translate-x-1/2 translate-y-1/2"></div>
          </div>

          {/* Promo Card 2 */}
          <div className="relative h-[400px] bg-[#F5E6E8] text-black p-8 flex flex-col justify-center overflow-hidden group cursor-pointer">
            <div className="absolute top-4 left-4 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-widest">
              Bundle Deal
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">GLOW BOOSTER<br/>STARTER PACK</h2>
              <p className="text-gray-600 mb-8 max-w-sm">Everything you need for glass skin in one package. Save 40% today.</p>
              <button className="bg-black text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors w-fit">
                View Bundle
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-bold uppercase tracking-wide mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Ending Soon
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
             {/* Simple promo items */}
             {[1,2,3,4].map(i => (
               <div key={i} className="border border-gray-100 p-4">
                 <div className="aspect-square bg-gray-50 mb-4"></div>
                 <div className="text-xs font-bold text-red-600 mb-1">24H FLASH SALE</div>
                 <div className="font-bold text-sm">Collagen Set {i}</div>
                 <div className="text-sm mt-1">$45.00 <span className="text-gray-300 line-through">$80.00</span></div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
