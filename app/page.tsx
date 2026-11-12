import FAQs from "@/components/FAQs";
import Hero from "@/components/Homepage/Hero";
import BgGradient from "@/components/ui/Gradients";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-[80px] pb-[80px]">
      <BgGradient />
      <Hero />
      <FAQs />
    </div>
  );
}
