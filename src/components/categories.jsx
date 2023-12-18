import BrowseMore from "./browseMoreBtn";

function CategoryCard({categoryName}){
    return(
        <div>
            <div><img src="" alt="card image" /></div>
            <div>{categoryName}</div>
        </div>
    )
}

function CategoriesSection() {
    return ( 
        <section>
            <h2>Categories</h2>
            <p>Lorem ipsum dolor sit amet.</p>
            <div>
                <CategoryCard categoryName="Novels" />
                <CategoryCard categoryName="Kids" />
                <CategoryCard categoryName="Kitchen" />
            </div>
            <BrowseMore text="More categories" />
        </section>
     );
}

export default CategoriesSection;