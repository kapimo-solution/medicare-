import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { CartProvider } from "@/lib/cart-context";
import Home from "@/pages/home";
import Shop from "@/pages/shop";
import Promotion from "@/pages/promotion";
import Reviews from "@/pages/reviews";
import AgeR from "@/pages/age-r";
import Contact from "@/pages/contact";
import ProductDetail from "@/pages/product-detail";
import Checkout from "@/pages/checkout";
import CheckoutSuccess from "@/pages/checkout-success";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shop" component={Shop} />
      <Route path="/collections/all" component={Shop} />
      <Route path="/collections/:handle" component={Shop} />
      <Route path="/promotion" component={Promotion} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/age-r" component={AgeR} />
      <Route path="/contact" component={Contact} />
      <Route path="/product/:id" component={ProductDetail} />
      <Route path="/products/:handle" component={ProductDetail} />
      <Route path="/category/:id" component={Shop} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/checkout-success" component={CheckoutSuccess} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Toaster />
        <Router />
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
