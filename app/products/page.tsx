
import React from 'react'
import Products from '../components/Products'
import Logos from '../components/Logos'

const ProductsPage = () => {
    return (
        <main>
            {/* <Heading heading='Product Details' /> */}
            <Products />
            {/* <ProductsDescriptions />
            <RelatedProducts /> */}
            <Logos />
        </main>
    )
}

export default ProductsPage