import { Leaf, Heart, Sparkles, Award } from 'lucide-react';
import aboutImage from '@/assets/handcrafted-process.jpg';

const features = [
  {
    icon: Leaf,
    title: 'Organic Ingredients',
    description: 'Only the finest organic botanicals, ethically sourced from local growers',
  },
  {
    icon: Heart,
    title: 'Handcrafted with Love',
    description: 'Each product is carefully crafted by skilled artisans in small batches',
  },
  {
    icon: Sparkles,
    title: 'Unique Formulations',
    description: 'Exclusive blends developed through years of expertise and passion',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Rigorous testing ensures every product meets our high standards',
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="relative rounded-lg overflow-hidden shadow-elegant">
              <img
                src={aboutImage}
                alt="Artisan crafting organic perfume"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              The Art of
              <span className="block text-primary mt-2">Natural Beauty</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Aureva, we believe beauty should be as natural as it is extraordinary. Our journey began
              with a simple vision: to create organic beauty products that honor both nature and craftsmanship.
            </p>
            <p className="text-lg text-muted-foreground mb-12">
              Every bottle tells a story of dedication, from the careful selection of home-grown botanicals
              to the artisanal techniques passed down through generations. We craft each fragrance and skincare
              product with meticulous attention to detail, ensuring purity, quality, and sustainability.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 animate-fade-in"
                    style={{ animationDelay: `${300 + index * 100}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center">
                        <Icon className="text-primary-foreground" size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
