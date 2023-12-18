function Item({name, price}) {
    return ( 
        <li>
            <div>
                <img src="" alt=""/>
                <div>
                    <p>{name}</p>
                    <p>${price}</p>
                </div>
            </div>
            <div>
                <span>Cart icon</span>
                <span>Add to cart</span>
            </div>
        </li>
     );
}

export default Item;