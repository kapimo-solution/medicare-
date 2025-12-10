import { Box, Sparkles, Zap, Droplets, Flame, Leaf, Beaker } from "lucide-react";

// Update styles to match the black/white contrast better
const CATEGORIES = [
  { id: 'all', label: 'SHOP ALL', icon: Box, style: 'bg-[#121212] text-white' },
  { id: 'best', label: 'BEST', icon: Sparkles, style: 'bg-[#121212] text-white' },
  { id: 'age-r', label: 'AGE-R', icon: Zap, style: 'bg-gray-100 text-gray-500' },
  { id: 'zero', label: 'ZERO LINE', icon: Droplets, style: 'bg-gray-100 text-gray-500' },
  { id: 'glow', label: 'GLOW LINE', icon: Sparkles, style: 'bg-gray-100 text-gray-500' },
  { id: 'deep', label: 'DEEP LINE', icon: Beaker, style: 'bg-gray-100 text-gray-500' },
  { id: 'red', label: 'RED LINE', icon: Flame, style: 'bg-gray-100 text-gray-500' },
  { id: 'cica', label: 'CICA LINE', icon: Leaf, style: 'bg-gray-100 text-gray-500' },
  { id: 'soyxidil', label: 'SOYXIDIL LINE', icon: Leaf, style: 'bg-gray-100 text-gray-500' },
];

export function CategoryNav() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex justify-start md:justify-center min-w-max md:min-w-0 gap-6 md:gap-8 lg:gap-10">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.id} 
              href={`/category/${cat.id}`}
              className="flex flex-col items-center gap-3 group cursor-pointer w-16 md:w-20"
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 ${cat.style}`}>
                <cat.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-gray-500 uppercase text-center leading-tight group-hover:text-black transition-colors">
                {cat.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
