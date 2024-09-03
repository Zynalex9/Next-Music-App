import  Instructors  from "@/components/Instructors";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialsCards from "@/components/TestimonialsCards";
import UpcomingWebiners from "@/components/UpcomingWebiners";
import WhyChooseUse from "@/components/WhyChooseUse";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUse/>
      <TestimonialsCards/>
      <UpcomingWebiners/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
