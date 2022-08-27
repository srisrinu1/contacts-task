import React, { useEffect,useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { deleteContact, getAllContacts, getSingleContact } from '../actions/contacts-action';
import { contactsSelector } from '../reducers/contactsReducer';

import { contactsReducer } from '../reducers/contactsReducer';
import AddEditContact from './AddEditContact';

const Contacts = () => {

const [toggleModal,setToggleModal]=useState(false);
const {contacts,contact,loading}=useSelector((state)=>state.contacts);


console.log(contacts,contact,loading);

const dispatch=useDispatch();
const [edit,setEdit]=useState(false);

useEffect(()=>{
  dispatch(getAllContacts())
},[])


const handleSubmit=(e)=>{
  e.preventDefault();
}


  const handleDelete=(id)=>{
     dispatch(deleteContact(id));
     console.log(id);
  }



  return (
    <div>
    <div className='container mx-auto flex flex-row justify-between py-10'>
      <h1 className='text-3xl'>All Contacts</h1>
      <button className='bg-blue-600 p-3 px-6 rounded-lg' onClick={()=>setToggleModal(!toggleModal)}>Add Contact</button>
    </div>
    {/* Table */}


   {contacts.length>0 && (
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


            {
                  contacts.map((contact,index)=>(

                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>

            <th scope='row' className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">{index+1}</th>

            <td className='py-4 px-6 whitespace-nowrap'>
               {contact.name}
            </td>
             <td className='py-4 px-6 whitespace-nowrap'>
               {contact.phoneNumber}
             </td>

             <td className="py-4 px-6 whitespace-nowrap">
               {contact.Email}
             </td>
             {/* <td className="py-4 px-6">
               {contact.action}
             </td> */}
              <td className="py-4 px-6 md:space-x-2 space-y-2">
                <button className='bg-blue-600 text-white p-3 px-6 rounded-lg' onClick={()=>{
                  setToggleModal(!toggleModal);
                  dispatch(getSingleContact(index))
                  setEdit(!edit)
                  }}>Edit</button>
                <button className='bg-red-600 text-white p-3 px-6 rounded-lg' onClick={()=>handleDelete(index)}>Delete</button>
              </td>




          </tr>

                  ))
                }

            </tbody>


         </table>

       </div>

     </div>
     )
   }

     <div className='container mx-auto mt-4 text-center'>
       {
        contacts.length===0 &&
         <h3 className='text-xl'>No contacts to display</h3>
       }

     </div>

     {/* Form modal */}

       {toggleModal && <AddEditContact toggleModal={toggleModal} setToggleModal={setToggleModal} Contact={contact} edit={edit} setEdit={setEdit} contacts={contacts}/>}

    </div>
  )
}

export default Contacts