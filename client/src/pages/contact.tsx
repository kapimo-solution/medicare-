import { TopBar, Header } from "@/components/layout/header";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-black uppercase tracking-tight text-center mb-12">Contact Us</h1>
        
        <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Get in touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions about our devices or skincare? Our beauty experts are here to help you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Email</h4>
                  <p className="text-gray-600">help@medicube.com.sg</p>
                  <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Phone</h4>
                  <p className="text-gray-600">+65 1234 5678</p>
                  <p className="text-xs text-gray-400 mt-1">Mon-Fri, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Office</h4>
                  <p className="text-gray-600">
                    123 Beauty Lane, #08-01<br/>
                    Singapore 123456
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">First Name</label>
                  <Input placeholder="Jane" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase">Last Name</label>
                  <Input placeholder="Doe" className="bg-white" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase">Email</label>
                <Input type="email" placeholder="jane@example.com" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase">Subject</label>
                <Input placeholder="Product Inquiry" className="bg-white" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase">Message</label>
                <Textarea placeholder="How can we help you?" className="bg-white min-h-[120px]" />
              </div>

              <Button className="w-full bg-black text-white uppercase font-bold tracking-widest hover:bg-gray-800">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
