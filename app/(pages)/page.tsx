import FAQs from "@/components/FAQs";
import { createMetadata } from "@/components/GetMetaData";
import BestProducts from "@/components/Homepage/BestProducts";
import Hero from "@/components/Homepage/Hero";
import WhatWeOffer from "@/components/Homepage/WhatWeOffer";
import NewsLetter from "@/components/NewsLetter";
import Testimonials from "@/components/Testimonials";
import BgGradient from "@/components/ui/Gradients";

export const generateMetadata = createMetadata("Homepage", true);

export default function Home() {
  return (
    <div className="w-full max-w-full flex flex-col items-center justify-center gap-[40px] 
    sm:gap-14 lg:gap-[80px] pb-10 sm:pb-14 lg:pb-[80px]
    pt-[80px] lg:pt-[20px]">
      <BgGradient className="w-[1200px] blur-[150px] h-[680px] inset-x-0 top-[-648px] opacity-[0.2] rotate-20 bg-gradient pointer-events-none" />
      <Hero />
      <WhatWeOffer />
      <BestProducts />
      <Testimonials />
      <FAQs />
      <NewsLetter />
    </div>
  );
}
