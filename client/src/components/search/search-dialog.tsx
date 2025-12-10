import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  // Clear query when closed
  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] top-[20%] translate-y-0">
        <DialogHeader>
          <DialogTitle className="sr-only">Search</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b border-gray-200 pb-2">
          <Search className="w-5 h-5 text-gray-400 mr-2" />
          <Input 
            placeholder="Search for products..." 
            className="border-none shadow-none focus-visible:ring-0 text-lg px-0 h-auto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        
        <div className="py-8">
          {query ? (
             <div className="text-center text-gray-500 text-sm">
               No results found for "{query}"
             </div>
          ) : (
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {["Booster Pro", "Collagen", "Zero Pore Pad", "Red Line", "Cica"].map((term) => (
                  <button 
                    key={term}
                    className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full text-sm transition-colors"
                    onClick={() => setQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
