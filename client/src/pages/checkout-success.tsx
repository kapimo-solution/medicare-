import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useLocation } from "wouter";

export default function CheckoutSuccess() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>
      
      <h1 className="text-3xl font-black uppercase tracking-tight mb-4">Order Confirmed!</h1>
      <p className="text-gray-600 max-w-md mb-8">
        Thank you for your purchase. We have received your order and will send you a confirmation email shortly.
      </p>
      
      <Button 
        onClick={() => setLocation("/")}
        className="bg-black text-white h-12 px-8 uppercase font-bold tracking-widest hover:bg-gray-800"
      >
        Continue Shopping
      </Button>
    </div>
  );
}
