import { GETLIST, GETLIST_FAIL, GETLIST_SUCCESS,
        GETRESERVATION,
        GETRESERVATION_FAIL,
        GETRESERVATION_SUCCESS,
        LOGIN, LOGIN_FAIL, LOGIN_SUCCESS,
        PROFILE, PROFILE_FAIL, PROFILE_SUCCESS,
        REGISTER, REGISTER_FAIL, REGISTER_SUCCESS,
        SAVERES,SAVERES_FAIL,SAVERES_SUCCESS, 
        UPDATELIST, UPDATELIST_FAIL, UPDATELIST_SUCCESS } from "./actionTypes"



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
    case UPDATELIST:
          return {
                 ...state,loading: true 
                  }
    case UPDATELIST_SUCCESS:
          return {
                ...state,loading: false,list:state.list.map(el=>el._id===payload._id?payload:el),errors:null,
                 }     
    case UPDATELIST_FAIL:
          return {
                ...state,loading: false, errors :payload
                 }   
  case SAVERES:
         return {
                 ...state,loading: true 
                 }
   case SAVERES_SUCCESS:
         return {
                 ...state,loading: false,user:state.user.map(el=>el._id===payload._id?payload:el),errors:null,
                 }     
   case SAVERES_FAIL:
         return {
                  ...state,loading: false, errors :payload
                 }  
    case REGISTER:
    case LOGIN:  
    case PROFILE:  
    case GETRESERVATION:  
     return {
        ...state,loading: true 
     }
    case REGISTER_SUCCESS:
     return {
           ...state,loading: false,user:payload,errors:null 
        } 
    case LOGIN_SUCCESS:
     return {
           ...state,loading: false,user:payload,errors:null,
        } 
    case PROFILE_SUCCESS:
     return {
           ...state,loading: false,user:payload,errors:null,autho:true 
        } 
    case GETRESERVATION_SUCCESS:
      return {
            ...state,loading: false,user:payload,errors:null,autho:true 
             }     
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case PROFILE_FAIL:
    case GETRESERVATION_FAIL:
        return {
           ...state,loading: false, errors :payload
        }
    default:
       return  state
}
}
export default reducer