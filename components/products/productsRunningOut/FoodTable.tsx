import React, { useEffect } from 'react';
import { usePagination, useTable } from 'react-table';
import { useCustomPagination} from './useCustomPagination';
import { FoodProduct } from '@/types/products';
import Image, {StaticImageData} from 'next/image'
import Pagination from './Pagination';
import { nairaConverter } from '@/utils/functions';

interface Props {
  data: FoodProduct[];
}

const FoodTable: React.FC<Props> = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'image',
        Cell: ({ value }: {value: StaticImageData}) => <Image src={value} alt="Product" className="rounded-xl xl:h-16 xl:w-16 lg:h-14 lg:w-14 md:h-12 md:w-12 h-10 w-10" />,
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Quantity',
        accessor: 'quantity',
      },
      {
        Header: 'Product ID',
        accessor: 'id',
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({value}:{value:number}) => <span>{nairaConverter.format(value)}</span>
      },
      {
        Header: 'Status',
        accessor: (row: FoodProduct) => {
          if (row.quantity === 0) return <span className='bg-[#ffe6e6] text-[#ff5b5b] lg:text-xs text-[10px] leading-4 text-center font-normal rounded-lg px-2 py-1'>Out of Stock</span>;
          if (row.quantity < 6) return <span className='bg-[#f9ead3] text-[#c87900] lg:text-xs text-[10px] leading-4 text-center font-normal rounded-lg px-2 py-1'>Low on Stock</span>;
          return <span  className='bg-[#e6ffe6] text-[#228022] lg:text-xs text-[10px] leading-4 text-center font-normal rounded-lg px-2 py-1'>Still in Stock</span>;
        },
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    //rows,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    setPageSize,
    state,
  } = useTable({ columns, data } as any, usePagination);


  const {pageIndex} = state;
  const paginationRange = useCustomPagination({
    totalPageCount: pageCount,
    currentPage: pageIndex,
    siblingCount: 1
});

useEffect(() => {
        setPageSize(5);
  }, [setPageSize]); //set according to your preference



  return (
    <div className="flex flex-col w-full font-barlow">
    <div className="overflow-auto whitespace-nowrap scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8">
      <div  className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="shadow overflow-hidden border-b border-gray-300 rounded-xl relative">
        <div className='bg-primary_100 bg-opacity-70 z-50 rounded-2xl xl:w-[6px] xl:h-[202px] w-1 lg:h-[120px] md:h-24 h-16 absolute -left-[2px] top-1/2 transform -translate-y-1/2'/>
        <table {...getTableProps()}className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-100">
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={`${headerGroup.id}-${index}`}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id} className="p-4 text-left text-sm font-semibold text-dark_700 Capitalize rounded-xl tracking-wider">
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} className="bg-white divide-y divide-gray-200">
        {page?.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={`${row.id}-${index}}`} className={`${index % 2 === 0 ? "bg-[#F9FAFB]" : "bg-white" }`}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} key={cell.column.id} className="p-4 text-sm font-medium tracking-wide text-left text-dark_700 whitespace-nowrap">
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
    {/*pagination*/}
        <Pagination 
          pageIndex={pageIndex}
          paginationRange={paginationRange}
          gotoPage={gotoPage}
        />
            </div>
          </div>
    </div>
  </div>
  );
};

export default FoodTable;
