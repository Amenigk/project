import { GETLIST, GETLIST_FAIL, GETLIST_SUCCESS } from "./actionTypes"



const stateglobal = {
    loading : false,
    list: null,
    user: null,
    errors:null,
    autho:false
} 

const reducer = (state=stateglobal,{type,payload}) => {
switch (type) {
    case GETLIST:
        return {
                    ...state,loading: true 
                 }
        case GETLIST_SUCCESS:
            return {
                           ...state,loading: false,list:payload,errors:null,
                        }     
            case GETLIST_FAIL:
                return {
                               ...state,loading: false, errors :payload
                            }   


//     case REGISTER:
//     case LOGIN:  
//     case PROFILE:  
//      return {
//         ...state,loading: true 
//      }
//     case REGISTER_SUCCESS:
//      return {
//            ...state,loading: false,user:payload,errors:null 
//         } 
//     case LOGIN_SUCCESS:
//      return {
//            ...state,loading: false,user:payload,errors:null,
//         } 
//     case PROFILE_SUCCESS:
//      return {
//            ...state,loading: false,user:payload,errors:null,autho:true 
//         } 
//     case REGISTER_FAIL:
//     case LOGIN_FAIL:
//     case PROFILE_FAIL:
//         return {
//            ...state,loading: false, errors :payload
//         }
    default:
       return  state
}
}
export default reducer