import { Link } from "wouter";
import { Search, ShoppingBag, User, Menu } from "lucide-react";
import logoUrl from "@assets/logo.svg";
import { useCart } from "@/lib/cart-context";
import { CartSheet } from "@/components/cart/cart-sheet";
import { SearchDialog } from "@/components/search/search-dialog";
import { useState } from "react";

export function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-[#ff9a9e] to-[#fad0c4] text-center py-2 px-4 text-[11px] font-bold tracking-wide text-[#121212] uppercase relative z-50">
      <span className="flex items-center justify-center gap-2">
        <span>🚚 FREE SHIPPING | min. $50 🚚</span>
      </span>
    </div>
  );
}

export function Header() {
  const { items, toggleCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  // Simple active link check (simplified for now)
  const linkClass = "hover:text-gray-600 transition-colors border-b-2 border-transparent hover:border-black";

  return (
    <>
      <header className="sticky top-0 w-full bg-white z-40 border-b border-gray-100">
        <div className="container mx-auto px-4 h-[70px] flex items-center justify-between">
          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Menu className="w-6 h-6" />
          </div>

          {/* Logo */}
          <Link href="/">
            <a className="flex-shrink-0">
              <img src={logoUrl} alt="Medicube" className="h-8 md:h-10 w-auto object-contain" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-black tracking-wide">
            <Link href="/collections/all"><a className={linkClass}>SHOP ALL</a></Link>
            <Link href="/promotion"><a className={linkClass}>PROMOTION</a></Link>
            <Link href="/reviews"><a className={linkClass}>REAL REVIEW</a></Link>
            <Link href="/age-r"><a className={linkClass}>AGE-R</a></Link>
            <Link href="/contact"><a className={linkClass}>CONTACT US</a></Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6 text-black">
            <button 
              className="hover:opacity-70 transition-opacity"
              onClick={() => setSearchOpen(true)}
            >
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              className="hover:opacity-70 transition-opacity relative"
              onClick={toggleCart}
            >
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                {items.length}
              </span>
            </button>
            <button className="hover:opacity-70 transition-opacity hidden md:block">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>
      <CartSheet />
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
}
