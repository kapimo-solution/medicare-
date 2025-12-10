import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { Minus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLocation } from "wouter";

export function CartSheet() {
  const { isOpen, toggleCart, items, removeItem, updateQuantity, total } = useCart();
  const [, setLocation] = useLocation();

  const handleCheckout = () => {
    toggleCart();
    setLocation("/checkout");
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="text-center font-bold uppercase tracking-widest">Shopping Cart ({items.length})</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto py-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-400 gap-4">
              <span className="text-4xl">🛒</span>
              <p>Your cart is empty</p>
              <Button variant="outline" onClick={toggleCart}>Start Shopping</Button>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-24 bg-gray-50 flex-shrink-0 overflow-hidden rounded-sm border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold line-clamp-2">{item.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{item.price}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-200">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="border-t pt-4 sm:flex-col sm:space-x-0">
            <div className="space-y-4 w-full">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-400 text-center">Shipping & taxes calculated at checkout</p>
              <Button 
                onClick={handleCheckout}
                className="w-full bg-black hover:bg-gray-900 text-white font-bold uppercase tracking-widest h-12 rounded-none"
              >
                Checkout
              </Button>
            </div>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}
