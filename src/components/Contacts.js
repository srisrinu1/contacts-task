import React from 'react'

const contacts = () => {
  return (
    <div>
    <div className='container mx-auto flex flex-row justify-between py-10'>
      <h1 className='text-3xl'>All Contacts</h1>
      <button className='bg-blue-600 p-3 px-6 rounded-lg'>Add Contact</button>
    </div>
    {/* Table */}
    <div className='container mx-auto mt-4'>
       <div className="overflow-x-auto relative">
         <table className='w-full text-sm text-left  text-gray-500 dark:text-gray-400'>
            <thead  className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                 <th scope='col' className='py-3 px-6'>
                 <td>S.NO</td>
                 </th>
                  <th scope='col' className='py-3 px-6'>
                 <td>Name</td>
                 </th>
                 <th scope='col' className='py-3 px-6'>
                 <td>Phone number</td>
                 </th>
                 <th scope='col' className='py-3 px-6'>
                 <td>Email</td>
                 </th>
                 <th scope='col' className='py-3 px-6'>
                 <td>Actions</td>
                 </th>
               </tr>

            </thead>

            <tbody>
              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                <th scope='row' className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">1</th>

                <td className='py-4 px-6'>
                   Mark
                </td>
                 <td className='py-4 px-6'>
                   Otto
                 </td>

                 <td className="py-4 px-6">
                   @mdo
                 </td>
                 <td className="py-4 px-6">
                  @mdo
                 </td>




              </tr>

              <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
               <th scope='row' className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white" >
                  2
               </th>
                 <td className="py-4 px-6">
                  Jacob
                 </td>
                 <td className="py-4 px-6">
                  Thorton
                 </td>
                 <td className="py-4 px-6">
                  @fat
                 </td>
                 <td className="py-4 px-6">
                  @fat
                 </td>

              </tr>
            </tbody>


         </table>

       </div>

     </div>
    </div>
  )
}

export default contacts