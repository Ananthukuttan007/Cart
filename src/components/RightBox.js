import React from 'react'

const RightBox = ({ quantity, total }) => {
    return (
        <div className='box'>
            <h2 className='productHeader'>Cart</h2>
            <div >
                <br />
                <div className="cartAdded">
                    <p>Product 1</p>
                    <p>{quantity.product1}</p>
                    <p>x</p>
                    <p>100</p>
                </div>
                <br />
                <div className="cartAdded">
                    <p>Product 2</p>
                    <p>{quantity.product2}</p>
                    <p>x</p>
                    <p>200</p>
                </div>
                <br />
                <div className="cartAdded">
                    <p>Product 3</p>
                    <p>{quantity.product3}</p>
                    <p>x</p>
                    <p>300</p>
                </div>
            </div>
            <br />
            <div className="cartAdded total">
                <p>Total</p>
                <p>{total}</p>
            </div>
        </div >
    )
}

export default RightBox