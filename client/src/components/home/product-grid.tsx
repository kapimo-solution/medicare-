import { Star } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Link } from "wouter";
import { PRODUCTS } from "@/lib/products";

export function ProductGrid() {
  const { addItem } = useCart();
  
  // Show only first 4 products for the home page grid
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 tracking-tight">BEST SELLER</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container */}
              <Link href={`/products/${product.handle}`}>
                <div className="relative aspect-[4/5] bg-gray-50 mb-4 overflow-hidden cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <span className="absolute top-0 left-0 bg-red-600 text-white text-[10px] font-bold px-2 py-1">
                      {product.badge}
                    </span>
                  )}
                </div>
              </Link>
              
              {/* Quick Add Button - Moved outside link to prevent navigation when clicked */}
              <div className="mt-[-16px] mb-2 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addItem(product);
                  }}
                  className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors"
                >
                  Add to Cart
                </button>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1 text-yellow-400 text-xs mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-200"}`} 
                    />
                  ))}
                  <span className="text-gray-400 ml-1">({product.reviews})</span>
                </div>
                
                <Link href={`/products/${product.handle}`}>
                  <h3 className="text-sm font-bold leading-tight group-hover:underline decoration-1 underline-offset-2 cursor-pointer">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-bold">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through">{product.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/collections/all">
            <button className="border border-black px-12 py-3 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
