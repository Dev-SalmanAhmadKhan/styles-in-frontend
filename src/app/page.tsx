import CategorySection from "@/components/pages/home/categories";
import HeroSection from "@/components/pages/home/hero";
import NewArrivals from "@/components/pages/home/new-arrival";
import SaleSection from "@/components/pages/home/sale";
import SaleBanner from "@/components/pages/home/sale-banner";
import SubCategorySection from "@/components/pages/home/sub-categories";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import TestimonialsSection from "@/components/shared/testimonials";

export default function Home() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <SubCategorySection />
      <NewArrivals />
      <SaleBanner />
      <SaleSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
