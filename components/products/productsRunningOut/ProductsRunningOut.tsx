'use client'

import React, { useState } from 'react';
import FoodTable from './FoodTable';
import FoodFilters from './FoodFilters';
import { FoodProduct } from '@/types/products';
import { foodProducts } from '@/utils/foodProducts';

const ProductsRunningOut: React.FC = () => {
  const [filteredData, setFilteredData] = useState<FoodProduct[]>(foodProducts);

//console.log(filteredData)
  const handleFilterChange = (selectedFilters: {
    category: string;
    location: string;
    day: number;
    month: string;
    year: number;
    filteredData: FoodProduct[];
  }) => {
    // Update the state with the filteredData
    setFilteredData(selectedFilters.filteredData);
  };


  return (
    <div className='w-full flex flex-col justify-start items-start xl:gap-14 lg:gap-7 gap-4'>
       <div className='flex md:flex-row flex-col md:items-center md:justify-between items-start justify-start w-full md:gap-0 gap-4'>
          <h2 className='xl:text-2xl lg:text-xl text-lg font-semibold text-[#464255]'>Product Category</h2>
          <FoodFilters data={foodProducts} onFilterChange={handleFilterChange} />
       </div>
      <FoodTable data={filteredData} />
    </div>
  );
};

export default ProductsRunningOut;
