import React from 'react'
import {popularProducts} from '../../Assets/Data';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

const Products = () => {
  return (
    <div className='products'>
        <div className="container">
            <div className="productsContent">
                {popularProducts.map(index => (
                    <div className='content' key={index.id}>
                      <div className="productShow">
                          <img src={index.img} alt={index.id} />
                          <div className="productBtn">
                            <div className="icons">
                              <ShoppingCartOutlinedIcon/>
                            </div>
                            <div className="icons">
                              <SearchOutlinedIcon/>
                            </div>
                            <div className="icons">
                              <FavoriteBorderOutlinedIcon/>
                            </div>
                          </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products
