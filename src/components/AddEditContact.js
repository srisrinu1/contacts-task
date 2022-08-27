import React, { useState,useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { AddContact, EditContact } from '../actions/contacts-action';

const AddEditContact = (props) => {

    const initialState={
      name:'',
      phoneNumber:'',
      Email:''
  }
    const [contact,setContact]=useState(initialState);
    const dispatch=useDispatch();
    const closeRef=useRef();
    console.log(props.Contact)

    useEffect(()=>{
         setContact(props.Contact)
    },[props.Contact])

    const handleChange=(e)=>{

        const {name,value}=e.target;


        setContact((prev)=>{

            return {...prev,[name]:value}
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();


        // dispatch(AddContact(contact));
        if(props.edit){
          dispatch(EditContact(contact));
          props.setEdit(!props.edit)
        }
        else{
          contact.id=props.contacts.length+1;
          dispatch(AddContact(contact));



        }



        closeRef.current.click();

    }




  return (
    <div id="authentication-modal" tabindex="-1" class="h-modal fixed top-14 backdrop-blur-sm  right-0 left-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full" aria-modal="true" role="dialog">
    <div class="relative h-full w-full max-w-md p-4 md:h-auto">
      <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
        <button type="button" ref={closeRef} onClick={()=>props.setToggleModal(!props.toggleModal)} class="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
          <svg aria-hidden="true" class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <h3 class="mb-4  font-medium text-gray-900 dark:text-white text-2xl">ADD/EDIT CONTACT</h3>
          <form class="space-y-6" action="#" onSubmit={handleSubmit}>
            <div>
              <label for="name" class="mb-2 block  font-medium text-gray-900 dark:text-gray-300 text-xl">Name</label>
              <input type="text" onChange={handleChange} name="name" value={contact.name} id="name" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" placeholder="Charan" required />
            </div>
            <div>
              <label for="phoneNumber" class="mb-2 block  font-medium text-gray-900 dark:text-gray-300 text-xl">Phone Number</label>
              <input type="tel" onChange={handleChange} name="phoneNumber" value={contact.phoneNumber} id="phoneNumber" placeholder="••••••••" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" required/>
            </div>
             <div>
              <label for="email" class="mb-2 block  font-medium text-gray-900 dark:text-gray-300 text-xl">Email</label>
              <input type="email" onChange={handleChange} name="Email" value={contact.Email} id="email" placeholder="••••••••" class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" required />
            </div>

            <button type="submit" class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ADD CONTACT</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddEditContact