import { FeatureSection, HeroSection, SupportSection, TestimonialsSection } from "./sections"

export const Home = () => {
    return (
        <div className="flex flex-col gap-2 mt-20">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <TestimonialsSection />
        </div>
    )
}