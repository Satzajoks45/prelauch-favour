import React from 'react'
import ProductUploadWrapper from './ProductUploadWrapper'
import { DecrementIcon, IncreamentIcon } from '../../../public/assets/icons'

const ProductInventory = () => {
  return (
    <ProductUploadWrapper title="Product inventory">
        <h2 className='font-inter xl:text-lg md:text-base text-sm text-dark_500'>Quantity of product</h2>
        <div className='flex items-center justify-between w-full border border-[#cec1c1] border-opacity-50 rounded-[14px] p-1'>
            <button className='rounded-[14px] shadow-range xl:px-9 xl:py-7 lg:px-7 lg:py-5 md:px-4 md:py-4 px-3 py-4 border border-[#cec1c1] border-opacity-30'>
                <DecrementIcon />
            </button>
            <span className='text-center font-roboto xl:text-[28px] xl:text-lg lg:text-base text-sm font-normal text-[#344767]'>3893.00</span>
            <button className='rounded-[14px] shadow-range xl:px-9 xl:py-[13px] lg:px-7 lg:py-[10px] md:px-5 md:py-4 px-3 py-3 border border-[#cec1c1] border-opacity-30'>
                <IncreamentIcon />
            </button>
        </div>
    </ProductUploadWrapper>
  )
}

export default ProductInventory