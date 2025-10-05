import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const products = [
  {
    name: 'Rose Garden Essence',
    category: 'Women',
    price: '$68',
    description: 'Delicate rose petals with hints of jasmine',
    badge: 'Best Seller',
  },
  {
    name: 'Cedarwood Noir',
    category: 'Men',
    price: '$75',
    description: 'Rich cedarwood with subtle spice notes',
    badge: 'New',
  },
  {
    name: 'Lavender Dreams',
    category: 'Unisex',
    price: '$62',
    description: 'Calming lavender with vanilla undertones',
    badge: 'Organic',
  },
  {
    name: 'Citrus Bloom',
    category: 'Women',
    price: '$58',
    description: 'Fresh citrus with floral heart notes',
    badge: 'Limited',
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="text-primary" size={24} />
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">
              Featured Collection
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Signature Scents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each fragrance is carefully crafted using organic ingredients, capturing the essence of nature's beauty
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Animated ring effect background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 animate-pulse" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-75 blur transition-all duration-500" />
              
              {/* Card content */}
              <div className="relative bg-card">
                <div className="aspect-square bg-gradient-warm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500" />
                  
                  {/* Inner glow ring */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-4 rounded-full border-2 border-primary/30 animate-ping" />
                    <div className="absolute inset-8 rounded-full border border-primary/20" />
                  </div>
                  
                  <Badge className="absolute top-4 right-4 bg-background text-foreground shadow-lg">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <h3 className="text-xl font-serif font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-serif font-bold text-primary">{product.price}</span>
                    <Button size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-pointer">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
