export const getAllContacts=()=>{
    return {type:'GET_ALL_CONTACTS'}
}

export const AddContact=(contact)=>{
   return {type:'ADD_CONTACT',payload:contact}
}

export const getSingleContact=(index)=>{
    return {type:'GET_SINGLE_CONTACT',payload:index};
}

export const EditContact=(contact)=>{
    return {type:'EDIT_CONTACT',payload:contact};
}

export const deleteContact=(id)=>{
    console.log(id);
    return {type:'DELETE_CONTACT',payload:id}
}
export const filterContacts=(searchInput)=>{
    return {type:'FILTER_CONTACTS',payload:searchInput}
}