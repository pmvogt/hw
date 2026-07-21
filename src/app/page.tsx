import { BrandFooter } from "@/components/landing/brand-footer";
import { LandingStage } from "@/components/landing/landing-stage";
import { SiteFooter } from "@/components/landing/site-footer";
import { SummarySections } from "@/components/landing/summary-sections";

export default function Home() {
  return (
    <main className="w-full bg-black">
      <div className="flex h-[100dvh] w-full flex-col overflow-hidden">
        <LandingStage />
        <BrandFooter />
      </div>
      <SummarySections />
      <SiteFooter />
    </main>
  );
}
