import { TopBar, Header } from "@/components/layout/header";
import { useCart } from "@/lib/cart-context";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const checkoutSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  address: z.string().min(5),
  city: z.string().min(2),
  postalCode: z.string().min(4),
  phone: z.string().min(8),
  cardNumber: z.string().min(16),
  expiryDate: z.string().min(5),
  cvc: z.string().min(3),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [, setLocation] = useLocation();
  
  const form = useForm<CheckoutForm>({
    resolver: zodResolver(checkoutSchema),
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Button onClick={() => setLocation("/shop")}>Return to Shop</Button>
      </div>
    );
  }

  const onSubmit = (data: CheckoutForm) => {
    // In a real app, we would process payment here
    console.log("Processing order:", data);
    clearCart();
    setLocation("/checkout-success");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold uppercase tracking-wider">Checkout</h1>
          <a href="/" className="text-sm text-gray-500 hover:text-black">Return to Store</a>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Form */}
          <div className="flex-1 space-y-8">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-sm border border-gray-200">
              <h2 className="text-lg font-bold uppercase mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <Label className="text-xs uppercase font-bold mb-1 block">Email</Label>
                  <Input {...form.register("email")} placeholder="email@example.com" />
                  {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-white p-6 rounded-sm border border-gray-200">
              <h2 className="text-lg font-bold uppercase mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <Label className="text-xs uppercase font-bold mb-1 block">First Name</Label>
                  <Input {...form.register("firstName")} />
                </div>
                <div className="col-span-1">
                  <Label className="text-xs uppercase font-bold mb-1 block">Last Name</Label>
                  <Input {...form.register("lastName")} />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs uppercase font-bold mb-1 block">Address</Label>
                  <Input {...form.register("address")} />
                </div>
                <div className="col-span-1">
                  <Label className="text-xs uppercase font-bold mb-1 block">City</Label>
                  <Input {...form.register("city")} />
                </div>
                <div className="col-span-1">
                  <Label className="text-xs uppercase font-bold mb-1 block">Postal Code</Label>
                  <Input {...form.register("postalCode")} />
                </div>
                <div className="col-span-2">
                  <Label className="text-xs uppercase font-bold mb-1 block">Phone</Label>
                  <Input {...form.register("phone")} />
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white p-6 rounded-sm border border-gray-200">
              <h2 className="text-lg font-bold uppercase mb-4">Payment</h2>
              <div className="space-y-4">
                 <RadioGroup defaultValue="card" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 border p-4 rounded-sm">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card">Credit Card</Label>
                    </div>
                 </RadioGroup>

                 <div className="space-y-4 pt-4">
                   <div>
                      <Label className="text-xs uppercase font-bold mb-1 block">Card Number</Label>
                      <Input {...form.register("cardNumber")} placeholder="0000 0000 0000 0000" />
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-xs uppercase font-bold mb-1 block">Expiry Date</Label>
                        <Input {...form.register("expiryDate")} placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label className="text-xs uppercase font-bold mb-1 block">CVC</Label>
                        <Input {...form.register("cvc")} placeholder="123" />
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="w-full lg:w-[400px] space-y-6">
            <div className="bg-white p-6 rounded-sm border border-gray-200 sticky top-4">
               <h2 className="text-lg font-bold uppercase mb-4 pb-4 border-b">Order Summary</h2>
               <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                 {items.map(item => (
                   <div key={item.id} className="flex gap-4">
                     <div className="w-16 h-16 bg-gray-50 flex-shrink-0">
                       <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-sm font-bold line-clamp-2">{item.name}</h4>
                       <div className="flex justify-between mt-1 text-sm text-gray-500">
                         <span>Qty: {item.quantity}</span>
                         <span>{item.price}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
               
               <div className="space-y-2 border-t pt-4 text-sm">
                 <div className="flex justify-between">
                   <span className="text-gray-600">Subtotal</span>
                   <span>${total.toFixed(2)}</span>
                 </div>
                 <div className="flex justify-between">
                   <span className="text-gray-600">Shipping</span>
                   <span>Free</span>
                 </div>
                 <div className="flex justify-between font-bold text-lg pt-2 border-t mt-2">
                   <span>Total</span>
                   <span>${total.toFixed(2)}</span>
                 </div>
               </div>

               <Button 
                type="submit" 
                className="w-full mt-6 bg-black text-white h-12 uppercase font-bold tracking-widest hover:bg-gray-800"
                disabled={form.formState.isSubmitting}
               >
                 {form.formState.isSubmitting ? "Processing..." : "Place Order"}
               </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
