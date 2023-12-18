import HeroSection from "../components/hero";
import Shelf from "../components/shelf";

function Shop() {
    return ( 
        <>
            <HeroSection hasButton={false} />
            <Shelf />    
        </>
     );
}

export default Shop;