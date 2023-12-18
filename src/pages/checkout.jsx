function FormInput({placeholder, inputType}) {
    return (
        <input type={inputType} placeholder={placeholder} />
    )
}

function Checkout() {
    return ( 
        <>
            <h1>Checkout</h1>
            <form action="">
                <div>
                    <h3>Billing details</h3>
                    <div>
                        <div>
                            <label htmlFor="">First name</label>
                            <FormInput inputType="text" placeholder={null} />
                        </div>
                        <div>
                            <label htmlFor="">Last name</label>
                            <FormInput inputType="text" placeholder={null} />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Country/ Region</label>
                        <select name="" id=""></select>
                    </div>
                    <div>
                        <label htmlFor="">Street address</label>
                        <FormInput inputType="text" placeholder="House number and street name" />
                        <FormInput inputType="text" placeholder="Apartment, suite, unit etc optional" />
                    </div>
                    <div>
                        <label htmlFor="city">Town / City</label>
                        <FormInput inputType="text" />
                    </div>
                    <div>
                        <label htmlFor="">Phone</label>
                        <FormInput inputType="tel" />
                    </div>
                    <div>
                        <label htmlFor="">Email address</label>
                        <FormInput inputType="email" placeholder="e.g john@example.com" />
                    </div>
                </div>
                <div>
                    <h3>Additional informations</h3>
                    <div>
                        <label htmlFor="">Order notes (Optional)</label>
                        <textarea name="" id="" cols="30" rows="4"></textarea>
                    </div>
                    <h3>Your order</h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Products</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Item name x1</td>
                                <td>$10.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Subtotal</td>
                                <td>$10.00</td>
                            </tr>
                            <tr>
                                <td>Tax</td>
                                <td>$1.5</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>$11.5</td>
                            </tr>
                        </tfoot>
                    </table>
                    <div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">PayPal</label>
                        </div>
                        <div>
                            <input type="radio" />
                            <label htmlFor="">Credit Card</label>
                        </div>
                    </div>
                    <Button buttonType="submit">Place Order</Button>
                </div>
            </form>
        </>
     );
}

export default Checkout;