import { TopBar, Header } from "@/components/layout/header";
import { PRODUCTS } from "@/lib/products";
import { Star, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useCart } from "@/lib/cart-context";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Shop() {
  const { addItem } = useCart();

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      {/* Shop Header - Minimalist and Centered like screenshot */}
      <div className="bg-white py-16 text-center">
        <h1 className="text-2xl font-bold uppercase tracking-wide text-black">All Products</h1>
      </div>

      {/* Toolbar / Filters */}
      <div className="sticky top-[70px] z-30 bg-white border-t border-b border-gray-100 py-3">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-black outline-none">
                Availability <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>In Stock</DropdownMenuItem>
                <DropdownMenuItem>Out of Stock</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 hover:text-black outline-none">
                Price <ChevronDown className="w-3 h-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>Under $50</DropdownMenuItem>
                <DropdownMenuItem>$50 - $100</DropdownMenuItem>
                <DropdownMenuItem>$100+</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 hover:text-black outline-none">
              Featured <ChevronDown className="w-3 h-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>Best Selling</DropdownMenuItem>
              <DropdownMenuItem>Alphabetically, A-Z</DropdownMenuItem>
              <DropdownMenuItem>Alphabetically, Z-A</DropdownMenuItem>
              <DropdownMenuItem>Price, low to high</DropdownMenuItem>
              <DropdownMenuItem>Price, high to low</DropdownMenuItem>
              <DropdownMenuItem>Date, old to new</DropdownMenuItem>
              <DropdownMenuItem>Date, new to old</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              {/* Image Container */}
              <Link href={`/products/${product.handle}`}>
                <div className="relative aspect-square bg-gray-50 mb-4 overflow-hidden cursor-pointer">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badges - Top Left */}
                  <div className="absolute top-0 left-0 flex flex-col items-start gap-1 p-0">
                     {product.badge && (
                      <span className={`text-[10px] font-bold px-2 py-1 text-white uppercase ${
                        product.badge === "Sold out" ? "bg-red-600" : "bg-red-600"
                      }`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
              </Link>

              {/* Info */}
              <div className="flex flex-col gap-1 text-center items-start text-left">
                <div className="flex items-center gap-1 text-xs mb-1">
                   <div className="flex text-black">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-black" : "text-gray-200"}`} 
                        strokeWidth={0}
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 underline ml-1">{product.reviews} reviews</span>
                </div>
                
                <Link href={`/products/${product.handle}`}>
                  <h3 className="text-sm font-bold leading-tight group-hover:underline decoration-1 underline-offset-2 cursor-pointer min-h-[40px]">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-xs text-gray-500 line-clamp-1 mb-2">{product.name}</p>

                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-sm font-bold">{product.price}</span>
                  <span className="text-xs text-gray-400 line-through decoration-gray-400">{product.originalPrice}</span>
                </div>

                {/* Add to Cart Button - Always visible on desktop in this layout, or hover? Screenshot shows select option/add to cart below */}
                <div className="w-full mt-4">
                  {product.isSoldOut ? (
                     <button 
                      disabled
                      className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest opacity-50 cursor-not-allowed rounded-full"
                    >
                      Sold Out
                    </button>
                  ) : (
                    <div className="space-y-2">
                       {/* Dropdown placeholder if needed, simplified to button for now */}
                       <button 
                        onClick={() => addItem(product)}
                        className="w-full bg-black text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors rounded-full"
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination / Load More */}
      <div className="py-12 border-t border-gray-100 mt-8 text-center">
         <div className="text-xs text-gray-500 mb-4">Showing {PRODUCTS.length} of {PRODUCTS.length} products</div>
         <div className="w-48 h-1 bg-gray-100 mx-auto rounded-full overflow-hidden">
           <div className="w-full h-full bg-black"></div>
         </div>
      </div>
      
      {/* Footer Placeholder for completeness */}
       <footer className="py-16 bg-gray-50 border-t border-gray-100 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="font-bold mb-4">ABOUT US</h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>Brand Story</li>
                <li>Store Location</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">CUSTOMER CARE</h4>
              <ul className="text-xs text-gray-500 space-y-2">
                <li>FAQ</li>
                <li>Contact Us</li>
                <li>Returns</li>
              </ul>
            </div>
          </div>
          <div className="text-center text-xs text-gray-400 border-t border-gray-200 pt-8">
            <p>© 2025 MEDICUBE. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
