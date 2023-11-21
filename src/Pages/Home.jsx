import React from 'react'
import Navbar from '../features/Navbar/navbar'
import ProductList from '../features/product/ProductList'
const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  )
}

export default Home
