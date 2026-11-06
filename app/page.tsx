import Hero from "@/components/Homepage/Hero";
import BgGradient from "@/components/ui/Gradients";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <BgGradient />
      <Hero />

    </div>
  );
}
