import React from 'react'

const LeftBox = ({ Products, quantity, setQuantity, total, setTotal }) => {
    console.log(Products)
    return (
        <div className='box box1'>
            <h2 className='productHeader'>Products</h2>
            <br />
            <div className="products product1">
                <p>Product 1</p>
                <p>100</p>
                <div className="btnBox">
                    <button onClick={() => {
                        if (quantity.product1 > 0) {
                            setQuantity({ ...quantity, product1: quantity.product1 - 1 })
                            setTotal(total - 100)
                        }
                    }}>-</button>
                    &nbsp;
                    &nbsp;
                    <label >{quantity.product1}</label>
                    &nbsp;
                    &nbsp;
                    <button onClick={() => {
                        setQuantity({ ...quantity, product1: quantity.product1 + 1 })
                        setTotal(total + 100)
                    }}>+</button>
                </div>
            </div>
            <br />
            <div className="products product1">
                <p>Product 2</p>
                <p>200</p>
                <div className="btnBox">
                    <button onClick={() => {
                        if (quantity.product2 > 0) {
                            setQuantity({ ...quantity, product2: quantity.product2 - 1 })
                            setTotal(total - 200)
                        }
                    }}
                    >-</button>
                    &nbsp;
                    &nbsp;
                    <label >{quantity.product2}</label>
                    &nbsp;
                    &nbsp;
                    <button
                        onClick={() => {
                            setQuantity({ ...quantity, product2: quantity.product2 + 1 })
                            setTotal(total + 200)
                        }}>+</button>
                </div>
            </div>
            <br />
            <div className="products product1">
                <p>Product 3</p>
                <p>300</p>
                <div className="btnBox">
                    <button onClick={() => {
                        if (quantity.product3 > 0) {
                            setQuantity({ ...quantity, product3: quantity.product3 - 1 })
                            setTotal(total - 300)
                        }
                    }}
                    >-</button>
                    &nbsp;
                    &nbsp;
                    <label >{quantity.product3}</label>
                    &nbsp;
                    &nbsp;
                    <button onClick={() => {
                        setQuantity({ ...quantity, product3: quantity.product3 + 1 })
                        setTotal(total + 300)
                    }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default LeftBox