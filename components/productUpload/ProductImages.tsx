import React from 'react'
import ProductUploadWrapper from './ProductUploadWrapper'
import {FileUpload} from './index'


const ProductImages = () => {
  return (
    <ProductUploadWrapper title="Product images">              
        <div className='grid grid-cols-3 gap-1 items-stretch'>
            <FileUpload />
            <FileUpload />
            <FileUpload />
        </div>
    </ProductUploadWrapper>
  )
}

export default ProductImages