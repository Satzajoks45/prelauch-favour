import React from 'react'
import ProductUploadWrapper from './ProductUploadWrapper'
import Select from '../Select'

const ProductCategory = ():JSX.Element => {
  return (
    <ProductUploadWrapper title='Product category'>
    <Select
      name=''
      iconClassName='xl:w-6 xl:h-4 md:w-4 md:h-3 w-3 h-2 absolute xl:right-7 lg:right-5 md:right-4 right-3 top-6'
      selectClassName="block xl:py-6 lg:py-4 py-3 xl:px-7 lg:px-[15px] px-3 xl:text-lg lg:text-base text-sm xl:placeholder:text-lg lg:placeholder:text-base placeholder:text-sm"
    > 
    <option value="beverages">beverages</option>  
    </Select>
 </ProductUploadWrapper>
  )
}

export default ProductCategory