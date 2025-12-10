import { TopBar, Header } from "@/components/layout/header";
import { Check } from "lucide-react";

export default function AgeR() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopBar />
      <Header />
      
      {/* Dark Theme Header Override for this page only */}
      <style>{`
        header { background-color: #000 !important; border-color: #333 !important; }
        header nav a { color: #fff !important; }
        header .text-black { color: #fff !important; }
      `}</style>

      {/* Hero */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black"></div>
        <div className="text-center relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            AGE-R<br/>TECHNOLOGY
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
            Professional aesthetic device technology adapted for safe and effective home use.
          </p>
          <button className="bg-white text-black px-8 py-3 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Explore Devices
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Electroporation", desc: "Creates temporary passageways in skin layer to deeply deliver active ingredients." },
            { title: "EMS Currents", desc: "Stimulates facial muscles to improve elasticity and lifting effect." },
            { title: "Radio Frequency", desc: "Generates deep heat to stimulate collagen production and skin regeneration." }
          ].map((feature, i) => (
            <div key={i} className="border border-gray-800 p-8 hover:border-gray-600 transition-colors">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Find Your Perfect Device</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-gray-800">Feature</th>
                  <th className="p-4 border-b border-gray-800 text-center">Booster Pro</th>
                  <th className="p-4 border-b border-gray-800 text-center">Air Shot</th>
                  <th className="p-4 border-b border-gray-800 text-center">Ussera</th>
                </tr>
              </thead>
              <tbody>
                {[
                  "Glow Booster", 
                  "Pore Care", 
                  "Elasticity", 
                  "Contouring", 
                  "Daily Use"
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-800/50">
                    <td className="p-4 border-b border-gray-800 font-bold">{row}</td>
                    <td className="p-4 border-b border-gray-800 text-center"><Check className="inline w-5 h-5 text-blue-500" /></td>
                    <td className="p-4 border-b border-gray-800 text-center">{i === 1 ? <Check className="inline w-5 h-5 text-blue-500" /> : "-"}</td>
                    <td className="p-4 border-b border-gray-800 text-center">{i === 2 ? <Check className="inline w-5 h-5 text-blue-500" /> : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
