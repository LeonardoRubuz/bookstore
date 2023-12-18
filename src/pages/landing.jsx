import Item from "../components/item";

function Landing() {
    return ( 
        <>
            <ul>
                <li>Shop</li>
                <li>Category</li>
                <li>Book Title</li>
            </ul>
            <section>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <h1>Book Title</h1>
                    <p>$10.00</p>
                    <form action="">
                        <input type="number" name="" id="" />
                        <select name="" id="">
                            <option value="" selected disabled>Choose a language</option>
                            <option value="">English</option>
                            <option value="">French</option>
                            <option value="">Spanish</option>
                        </select>
                        <button type="submit">Add to cart</button>
                    </form>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi, eos illo! Dicta voluptatum quod modi sit! Quod vero doloribus suscipit dicta, 
                        eos dolores velit quos quaerat, officia saepe eveniet dolorem.
                    </p>
                    <ul>
                        <li>Categories : Lorem</li>
                        <li>Author : John Doe</li>
                        <li>Year : 1945</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2>Related products</h2>
                <ul>
                    <Item name="Lorem Ipsum" price="10.00" />
                    <Item name="Lorem Ipsum" price="10.00" />
                    <Item name="Lorem Ipsum" price="10.00" />
                </ul>
            </section>
        </>
     );
}

export default Landing;