import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import SearchIcon from '@material-ui/icons/Search';

export const Products = () => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
      
            {products.length !== 0 && <h1 style={{marginLeft: 400}}>Products</h1>}
            <div className='products-container'>
                {products.length === 0 && <div>Check your internet Collection</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            R {product.ProductPrice}.00
                    </div>
                        <button style={{backgroundColor: "black"}} className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                    </div>
                ))}
            </div>
        </>
    )
}