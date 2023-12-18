function HeroSection({hasButton, buttonText}) {
    return ( 
        <section>
            <h1>Big Catchy text</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, sit?</p>
            {
                hasButton ? 
                <button>{buttonText}</button>
                :
                null
            }
        </section>
     );
}

export default HeroSection;