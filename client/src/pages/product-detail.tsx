import { TopBar, Header } from "@/components/layout/header";
import { useRoute } from "wouter";
import { useCart } from "@/lib/cart-context";
import { PRODUCTS } from "@/lib/products";
import { Star, Minus, Plus, Share2, Heart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const [match, params] = useRoute("/products/:handle");
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);

  if (!match || !params) return null;

  const product = PRODUCTS.find(p => p.handle === params.handle);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <TopBar />
        <Header />
        <div className="flex-1 flex items-center justify-center text-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <a href="/" className="underline">Back to Home</a>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for(let i=0; i<quantity; i++) {
      addItem({
        ...product,
        // If variants exist, you might want to append variant info to name or id
        id: selectedVariant ? `${product.id}-${selectedVariant}` : product.id
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="w-full md:w-1/2">
            <div className="aspect-square bg-gray-50 border border-gray-100 overflow-hidden relative">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
               {product.badge && (
                  <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 text-white uppercase ${
                    product.badge === "Sold out" ? "bg-gray-900" : "bg-red-600"
                  }`}>
                    {product.badge}
                  </span>
                )}
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {product.images && product.images.length > 0 ? (
                product.images.map((img, i) => (
                  <div key={i} className="aspect-square bg-gray-50 border border-gray-100 cursor-pointer hover:border-black transition-colors">
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                  </div>
                ))
              ) : (
                [1,2,3,4].map((i) => (
                  <div key={i} className="aspect-square bg-gray-50 border border-gray-100 cursor-pointer hover:border-black transition-colors">
                    <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover opacity-80 hover:opacity-100" />
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <div className="flex text-yellow-400">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-200"}`} />
                 ))}
              </div>
              <span className="text-xs text-gray-500 underline">{product.reviews} Reviews</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-2xl font-bold text-red-600">{product.price}</span>
              <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
            </div>

            {product.variants && (
              <div className="mb-6">
                <label className="text-xs font-bold uppercase block mb-2">Options</label>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariant(v.id)}
                      className={`px-4 py-2 border text-sm ${selectedVariant === v.id ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-400'}`}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="prose prose-sm text-gray-600 mb-8 leading-relaxed">
              <p>{product.description}</p>
            </div>

            <div className="border-t border-b border-gray-100 py-6 mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm uppercase">Quantity</span>
                <div className="flex items-center border border-gray-200">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-3 hover:bg-gray-50"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-bold">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-3 hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-8">
              <Button 
                onClick={handleAddToCart}
                disabled={product.isSoldOut}
                className={`flex-1 h-14 font-bold uppercase tracking-widest rounded-none text-base ${
                  product.isSoldOut 
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed hover:bg-gray-200" 
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {product.isSoldOut ? "Sold Out" : "Add to Cart"}
              </Button>
              <button className="w-14 h-14 border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Accordions for extra info */}
            <div className="space-y-4">
               <div>
                 <h3 className="font-bold text-sm uppercase border-b border-gray-200 pb-2 mb-2">Key Benefits</h3>
                 <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                   {product.benefits?.map((b: string, i: number) => <li key={i}>{b}</li>)}
                 </ul>
               </div>
               <div>
                 <h3 className="font-bold text-sm uppercase border-b border-gray-200 pb-2 mb-2 mt-4">How To Use</h3>
                 <p className="text-sm text-gray-600">{product.howToUse}</p>
               </div>
            </div>

            <div className="mt-auto pt-8 flex items-center gap-4 text-xs font-bold uppercase text-gray-400">
              <button className="flex items-center gap-2 hover:text-black">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
