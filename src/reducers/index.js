import { combineReducers } from "redux";
import { contactsReducer } from "./contactsReducer";


export const rootReducer=combineReducers({
   contacts:contactsReducer
});

