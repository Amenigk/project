import { GETLIST, GETLIST_FAIL, GETLIST_SUCCESS,
         LOGIN, LOGIN_FAIL, LOGIN_SUCCESS,
         PROFILE, PROFILE_FAIL, PROFILE_SUCCESS,
         REGISTER, REGISTER_FAIL, REGISTER_SUCCESS,
         UPDATELIST, UPDATELIST_FAIL, UPDATELIST_SUCCESS,
         SAVERES, SAVERES_FAIL, SAVERES_SUCCESS, GETRESERVATION, GETRESERVATION_SUCCESS, GETRESERVATION_FAIL} from "./actionTypes"
import axios from "axios"




export const getList = (newLocation) => async(dispatch)=>
{
    dispatch({
        type :GETLIST
    })
    try {
        const res = await axios.post("/list/getList",newLocation) 
        console.log(res)
        dispatch({
            type: GETLIST_SUCCESS,
            payload : res.data

        })
    } catch (error) {
            dispatch({
            type: GETLIST_FAIL,
            payload : error.response.data
        })
    }
}




//  user  Actions
export const saveRes = (newRes,x) => async(dispatch)=>
{   
    const token= localStorage.getItem("token")
    dispatch({
        type :SAVERES
    })
    const  config ={
        headers:{
            Authorization:token 
        }
    }

    try {
        const res = await axios.put(`/user/saveRes/${x}`,newRes,config) 
        console.log(res)
        dispatch({
            type: SAVERES_SUCCESS,
            payload : res.data

        })
    } catch (error) {
            dispatch({
            type: SAVERES_FAIL,
            payload : error.response.data
        })
    }
}


export const updatelist = (newResPlaces,x) => async(dispatch)=>
{   
    const token= localStorage.getItem("token")
    dispatch({
        type :UPDATELIST
    })
    const  config ={
        headers:{
            Authorization:token 
        }
    }

    try {
        const res = await axios.put(`/list/updatelist/${x}`,newResPlaces,config) 
        console.log(res)
        dispatch({
            type: UPDATELIST_SUCCESS,
            payload : res.data

        })
    } catch (error) {
            dispatch({
            type: UPDATELIST_FAIL,
            payload : error.response.data
        })
    }
}



export const register = (newUser) => async(dispatch)=>
{
    dispatch({
        type :REGISTER
    })
    try {
        const res = await axios.post("/user/register",newUser) 
        console.log(res)
        dispatch({
            type: REGISTER_SUCCESS,
            payload : res.data

        })
    } catch (error) {
            dispatch({
            type: REGISTER_FAIL,
            payload : error.response.data
        })
    }
}


export const login = (newUser) => async(dispatch)=>
{
    dispatch({
        type :LOGIN
    })
    try {
        const res = await axios.post("/user/login",newUser) 
        localStorage.setItem("token",res.data.token)
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload : res.data.userAutho

        })
    } catch (error) {
            dispatch({
            type: LOGIN_FAIL,
            payload : error.response.data
        })
    }
}

export const profile = (newUser) => async(dispatch)=>
{   
    const token= localStorage.getItem("token")
    dispatch({
        type :PROFILE
    })
    const  config ={
        headers:{
            Authorization:token 
        }
    }

    try {
        const res = await axios.get("/user/profile",config) //config must be the last things after all params
        console.log(res)
        dispatch({
            type: PROFILE_SUCCESS,
            payload : res.data

        })
    } catch (error) {
            dispatch({
            type: PROFILE_FAIL,
            payload : error.response.data
        })
    }
}
export const getReservation = (User) => async(dispatch)=>
{   
    const token= localStorage.getItem("token")
    dispatch({
        type :GETRESERVATION
    })
    const  config ={
        headers:{
            Authorization:token 
        }
    }

    try {
        const res = await axios.get("/user/getReservation",config) //config must be the last things after all params
        console.log(res)
        dispatch({
            type: GETRESERVATION_SUCCESS,
            payload : res.data

        })
    } catch (error) {
            dispatch({
            type: GETRESERVATION_FAIL,
            payload : error.response.data
        })
    }
}