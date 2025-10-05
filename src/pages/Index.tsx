import CursorRipple from '@/components/CursorRipple';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Collections from '@/components/Collections';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <CursorRipple />
      <Navigation />
      <Hero />
      <FeaturedProducts />
      <Collections />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
