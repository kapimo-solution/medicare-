import { TopBar, Header } from "@/components/layout/header";
import { Star, ThumbsUp } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    user: "Sarah K.",
    rating: 5,
    title: "Best investment for my skin!",
    content: "I was skeptical at first, but after using the Booster Pro for 2 weeks, my skin texture has completely changed. It's glowing and my pores look smaller.",
    date: "2 days ago",
    image: "https://themedicube.com.sg/cdn/shop/files/3_4cb90be0-f9f3-4da3-ad56-c91aaddb40fb.jpg?v=1758591652&width=200",
    product: "AGE-R Booster Pro"
  },
  {
    id: 2,
    user: "Michelle T.",
    rating: 5,
    title: "Glass skin achieved",
    content: "The Collagen Jelly Cream is amazing. It's not sticky and absorbs really well when used with the device.",
    date: "1 week ago",
    image: null,
    product: "Collagen Niacinamide Jelly Cream"
  },
  {
    id: 3,
    user: "Jessica L.",
    rating: 4,
    title: "Great results, takes consistency",
    content: "You really need to use it every day to see results, but it definitely works. My jawline looks more defined.",
    date: "2 weeks ago",
    image: null,
    product: "AGE-R Ultra Tune"
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-black uppercase tracking-tight text-center mb-12">Real Reviews</h1>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Summary */}
          <div className="md:w-1/3 space-y-8">
            <div className="bg-gray-50 p-8 text-center">
              <div className="text-5xl font-black mb-2">4.9</div>
              <div className="flex justify-center gap-1 text-yellow-400 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-current w-5 h-5" />)}
              </div>
              <p className="text-sm text-gray-500">Based on 12,405 reviews</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-bold text-sm uppercase">Rating Breakdown</h3>
              {[5,4,3,2,1].map(stars => (
                <div key={stars} className="flex items-center gap-2 text-xs">
                  <span className="w-3">{stars}</span>
                  <Star className="w-3 h-3 text-gray-300" />
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-black" style={{ width: stars === 5 ? '85%' : stars === 4 ? '10%' : '2%' }}></div>
                  </div>
                  <span className="w-8 text-right text-gray-400">{stars === 5 ? '85%' : stars === 4 ? '10%' : '2%'}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review List */}
          <div className="md:w-2/3 space-y-8">
             {REVIEWS.map(review => (
               <div key={review.id} className="border-b border-gray-100 pb-8 last:border-0">
                 <div className="flex justify-between items-start mb-4">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                       {review.user[0]}
                     </div>
                     <div>
                       <div className="font-bold text-sm">{review.user}</div>
                       <div className="text-xs text-gray-400 flex items-center gap-2">
                         <span>Verified Buyer</span>
                         <span>•</span>
                         <span>{review.date}</span>
                       </div>
                     </div>
                   </div>
                   <div className="flex text-yellow-400">
                     {[...Array(5)].map((_, i) => (
                       <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-current" : "text-gray-200"}`} />
                     ))}
                   </div>
                 </div>

                 <h3 className="font-bold text-lg mb-2">{review.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed mb-4">{review.content}</p>
                 
                 {review.image && (
                   <div className="w-24 h-24 mb-4 bg-gray-50 rounded-md overflow-hidden">
                     <img src={review.image} alt="Review" className="w-full h-full object-cover" />
                   </div>
                 )}

                 <div className="flex items-center justify-between mt-4">
                   <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
                     Product: {review.product}
                   </div>
                   <button className="flex items-center gap-1 text-xs text-gray-400 hover:text-black">
                     <ThumbsUp className="w-3 h-3" />
                     Helpful
                   </button>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
