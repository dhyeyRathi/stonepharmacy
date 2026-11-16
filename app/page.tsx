import FAQs from "@/components/FAQs";
import BestProducts from "@/components/Homepage/BestProducts";
import Hero from "@/components/Homepage/Hero";
import WhatWeOffer from "@/components/Homepage/WhatWeOffer";
import NewsLetter from "@/components/NewsLetter";
import BgGradient from "@/components/ui/Gradients";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[80px] pb-[80px]">
      <BgGradient />
      <Hero />
      <WhatWeOffer />
      <BestProducts />
      <FAQs />
      <NewsLetter />
    </div>
  );
}
