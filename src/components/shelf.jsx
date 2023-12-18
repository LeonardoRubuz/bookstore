import Item from "./item";

function SideShelfCategory({name}) {
    return (
        
        <li>
            <img src="" alt="" />
            <h6>{name}</h6>
        </li>
    )
}

function Shelf() {
    return ( 
        <>
            <section>
                <div>
                    <div>    
                        <form action="">
                            <input type="text" placeholder="Search boom" />
                            <button type="submit">Search</button>
                        </form>
                    </div>
                    <h4>Books categories</h4>
                    <ul>
                        <SideShelfCategory name="Novels" />
                        <SideShelfCategory name="Politics" />
                        <SideShelfCategory name="Health" />
                        <SideShelfCategory name="Science" />
                        <SideShelfCategory name="Kitchen" />
                        <SideShelfCategory name="Litterature" />
                        <SideShelfCategory name="Horror" />
                        <SideShelfCategory name="Mystery" />
                        <SideShelfCategory name="Philosophy" />
                    </ul>
                </div>
                <div>    
                    <select name="" id="">
                            <option value="">All books</option>
                            <option value="">Popularity</option>
                            <option value="">Latest</option>
                            <option value="">Price : low to high</option>
                            <option value="">Price : high to low</option>
                    </select>
                    <ul>
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                        <Item name="Lorem ipsum" price="10.00" />
                    </ul>
                    <div>
                        <button>Previous</button>
                        <div>
                            <button>1</button>
                            <button>2</button>
                            <button>3</button>
                        </div>
                        <button>Next</button>
                    </div> 
                </div>
            </section>
            <section>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                    <div><img src="" alt="" /></div>
                </div>
            </section>
        </>
     );
}

export default Shelf;