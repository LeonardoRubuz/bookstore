import BestsellersSection from "../components/bestsellers";
import CategoriesSection from "../components/categories";
import HeroSection from "../components/hero";
import NewArrivalsSection from "../components/newArrivals";
import TransitionSection from "../components/transition";

function Home() {
    return ( 
        <>
            <HeroSection />
            <TransitionSection />
            <CategoriesSection />
            <NewArrivalsSection />
            <BestsellersSection />
            <TransitionSection />
        </>
     );
}

export default Home;