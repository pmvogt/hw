import { BrandFooter } from "@/components/landing/brand-footer";
import { LandingStage } from "@/components/landing/landing-stage";

export default function Home() {
  return (
    <main className="flex h-[100dvh] w-full flex-col overflow-hidden bg-black">
      <LandingStage />
      <BrandFooter />
    </main>
  );
}
