import React from 'react'
import ProductUploadWrapper from './ProductUploadWrapper'

const ProductDescription = () => {
  return (
    <ProductUploadWrapper title="Product description">
        <input type="text" className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none " placeholder="Product name" />
        <textarea
        rows={7}
        placeholder='About product'
        className="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 w-full placeholder:text-dark_500 text-dark_500 bg-[#fdfdfd] rounded-lg border border-[#cec1c1] border-opacity-80 font-inter xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm focus:outline-none transition duration-300 focus:border-primary_100 focus:ring-[0.5px] focus:ring-primary_100 outline-none" 
        ></textarea>
    </ProductUploadWrapper>
  )
}

export default ProductDescription