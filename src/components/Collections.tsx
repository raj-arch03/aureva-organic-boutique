import { Button } from '@/components/ui/button';
import mensImage from '@/assets/mens-collection.jpg';
import womensImage from '@/assets/womens-collection.jpg';

const Collections = () => {
  return (
    <section id="collections" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Curated Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our specialized ranges, thoughtfully crafted for different styles and preferences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Men's Collection */}
          <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-in cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={mensImage}
                alt="Men's Collection - Organic grooming products"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-serif font-bold mb-2 text-foreground">
                For Him
              </h3>
              <p className="text-muted-foreground mb-4">
                Sophisticated scents with earthy, woody, and spicy notes
              </p>
              <Button className="bg-gradient-warm border-0 cursor-pointer">
                Shop Men's Collection
              </Button>
            </div>
          </div>

          {/* Women's Collection */}
          <div className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-elegant transition-all duration-500 animate-fade-in cursor-pointer" style={{ animationDelay: '100ms' }}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={womensImage}
                alt="Women's Collection - Organic beauty products"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-3xl font-serif font-bold mb-2 text-foreground">
                For Her
              </h3>
              <p className="text-muted-foreground mb-4">
                Elegant fragrances with floral, fruity, and soft notes
              </p>
              <Button className="bg-gradient-warm border-0 cursor-pointer">
                Shop Women's Collection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
