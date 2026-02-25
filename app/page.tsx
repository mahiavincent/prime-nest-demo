import Features from "@/components/features";
import Footer from "@/components/footer";
import HeroSection from "@/components/Hero-Section";
import Hero04Page from "@/components/shadcn-space/blocks/hero-02";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
      <div>
        <Hero04Page></Hero04Page>
        <Features></Features>
        <Footer></Footer>
      </div>
  );
}
