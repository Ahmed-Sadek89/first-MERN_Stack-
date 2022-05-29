import React from 'react'

const ProductFilter = () => {
  return (
    <div className='productFilter'>
      <div className="container">
          <h2>Dressess</h2>
          <div className="filterOptions">
              <div className="filterDetails">
                <span>filter products</span>
                <div className="select">
                    <select className='colorSelect'>
                        <option disabled selected>
                            Color
                        </option>
                        <option>White</option>
                        <option>Black</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Green</option>
                    </select>
                    <select>
                    <option disabled selected>
                        Size
                    </option>
                    <option>XS</option>
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                    </select>
                </div>
              </div>
              <div className="filterSort">
                <span>sort products</span>
                <select>
                    <option selected>Newest</option>
                    <option>Price (asc)</option>
                    <option>Price (desc)</option>
                </select>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ProductFilter
