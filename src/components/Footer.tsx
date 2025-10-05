import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-primary">Aureva</h3>
            <p className="text-background/80 text-sm">
              Handcrafted organic beauty products made with love and care for your unique beauty.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><button className="hover:text-primary transition-colors cursor-pointer">Women's Collection</button></li>
              <li><button className="hover:text-primary transition-colors cursor-pointer">Men's Collection</button></li>
              <li><button className="hover:text-primary transition-colors cursor-pointer">Best Sellers</button></li>
              <li><button className="hover:text-primary transition-colors cursor-pointer">New Arrivals</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><button className="hover:text-primary transition-colors cursor-pointer">Our Story</button></li>
              <li><button className="hover:text-primary transition-colors cursor-pointer">Ingredients</button></li>
              <li><button className="hover:text-primary transition-colors cursor-pointer">Sustainability</button></li>
              <li><button className="hover:text-primary transition-colors cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                <Instagram size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                <Facebook size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary transition-colors flex items-center justify-center cursor-pointer">
                <Twitter size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 Aureva. All rights reserved. Handcrafted with love.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
