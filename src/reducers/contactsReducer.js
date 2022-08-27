const initialState={
   contacts: [ {
    id:1,
    name:'Mark',
    phoneNumber:'Otto',
    Email:' @mdo',
    action:'@mdo'
  },
  {
    id:2,
    name:'Jacob',
    phoneNumber:'Thorton',
    Email:' @fat',
    action:'@fat',
  },
  {
    id:3,
    name:'Larry the Bird',
    phoneNumber:'@twitter',
    Email:' @twitter',
    action:'@twitter'
  },
],
contact:{},
loading:true,


}

export const contactsReducer=(state=initialState,action)=>{

    const {type,payload}=action;

    switch(type){

        case 'GET_ALL_CONTACTS':
            return {...state};
        case 'ADD_CONTACT':
           const tempcontacts=[...state.contacts];
           tempcontacts.push(payload);
           console.log(tempcontacts);
           return {...state,contacts:tempcontacts};
        case 'GET_SINGLE_CONTACT':
          return {...state,contact:state.contacts[payload]}
        case 'EDIT_CONTACT':
          {
            let tempcontacts=[...state.contacts];
            const Index=tempcontacts.findIndex((contact)=>contact.id===payload.id);
            tempcontacts[Index]=payload;
            return {...state,contacts:tempcontacts};
          }
        case 'DELETE_CONTACT':
           {
            let tempcontacts=[...state.contacts];
            tempcontacts.splice(payload,1);
             return {...state,contacts:tempcontacts};
           }
        case 'FILTER_CONTACTS':
          {
            let tempcontacts=[...state.contacts];
            console.log(payload)
            tempcontacts=tempcontacts.filter((contact)=>{
              return contact.name.toLocaleLowerCase().indexOf(payload)!==-1
            });
            return {...state,contacts:tempcontacts}
          }

        default:
            return state;
    }

}

export const contactsSelector=(state)=>state.contactsReducer;
