import { TopBar, Header } from "@/components/layout/header";
import { Hero } from "@/components/home/hero";
import { CategoryNav } from "@/components/home/category-nav";
import { ProductGrid } from "@/components/home/product-grid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <CategoryNav />
        <ProductGrid />
      </main>
      
      {/* Simple Footer */}
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
