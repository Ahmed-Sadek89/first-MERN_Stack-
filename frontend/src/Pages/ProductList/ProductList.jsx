import React from 'react'
import Announcement from '../../Components/Announcement/Announcement'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Newsletter from '../../Components/Newsletter/Newsletter'
import ProductFilter from '../../Components/ProductFilter/ProductFilter'
import Products from '../../Components/Products/Products'
import SADEK from '../../Components/SADEK/SADEK'

const ProductList = () => {
  return (
    <>
      <Navbar />
      <Announcement />

      <ProductFilter />

      <Products />
      <Newsletter />
      <Footer />
      <SADEK />
    </>
  )
}

export default ProductList