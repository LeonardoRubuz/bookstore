import BrowseMore from "./browseMoreBtn";

function ArrivalItem({itemName, itemDescription, itemPrice}) {
    return (
        
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h4>{itemName}</h4>
                <p>{itemDescription}</p>
                <p>${itemPrice}</p>
            </div>
        </div>
    )
}

function NewArrivalsSection() {
    return ( 
        <section>
            <h2>New Arrivals</h2>
            <h3>Explore our latest books</h3>
            <BrowseMore text="See more" />
            <div>
                <ArrivalItem itemName="Item name" itemDescription="lorem ipsum sit dolor" itemPrice="00.00" />
                <ArrivalItem itemName="Item name" itemDescription="lorem ipsum sit dolor" itemPrice="00.00" />
                <ArrivalItem itemName="Item name" itemDescription="lorem ipsum sit dolor" itemPrice="00.00" />
                <ArrivalItem itemName="Item name" itemDescription="lorem ipsum sit dolor" itemPrice="00.00" />
            </div>
        </section>
     );
}

export default NewArrivalsSection;