import React, { useEffect } from "react";
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import deleteProduct from "../../redux/thunk/Products/deleteProduct";
import fetchProducts from "../../redux/thunk/Products/fetchProducts";

const ProductList = () => {
  const products = useSelector(state => state.product.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Products</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Product Name</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Brand</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>In Stock</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Price</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {products.map(({ model, brand, price, status, _id }) => (
                <tr key={_id}>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>{model}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left capitalize'>{brand}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left'>
                      {status ? (
                        <p className='text-green-500 font-medium'>Available</p>
                      ) : (
                        <p className='text-red-500 font-medium'>Stock out</p>
                      )}
                    </div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left font-medium text-indigo-500'>
                      {price}
                    </div>
                  </td>
                  <td className='p-2 flex justify-center items-center gap-2'>
                    <div>
                      <button onClick={() => dispatch(deleteProduct(_id))}>
                        <RiDeleteBinLine size={20} />
                      </button>
                    </div>
                    <div>
                      <Link to={`update-product/${_id}`}>
                        <button>
                          <CiEdit size={20} />
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    // </section>
  );
};

export default ProductList;
