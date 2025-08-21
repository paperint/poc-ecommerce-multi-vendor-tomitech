import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { PopularCategories } from "@/components/popular-categories";
import { TopVendors } from "@/components/top-vendors";
import { FeaturedProducts } from "@/components/featured-products";
import { CustomerTestimonials } from "@/components/customer-testimonials";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <PopularCategories />
        <TopVendors />
        <FeaturedProducts />
        <CustomerTestimonials />
      </main>
      <Footer />
    </div>
  );
}
