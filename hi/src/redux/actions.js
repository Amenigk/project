import { GETLIST, GETLIST_FAIL, GETLIST_SUCCESS } from "./actionTypes"
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



// //  user  Actions
// export const register = (newUser) => async(dispatch)=>
// {
//     dispatch({
//         type :REGISTER
//     })
//     try {
//         const res = await axios.post("/user/register",newUser) 
//         console.log(res)
//         dispatch({
//             type: REGISTER_SUCCESS,
//             payload : res.data

//         })
//     } catch (error) {
//             dispatch({
//             type: REGISTER_FAIL,
//             payload : error.response.data
//         })
//     }
// }


// export const login = (newUser) => async(dispatch)=>
// {
//     dispatch({
//         type :LOGIN
//     })
//     try {
//         const res = await axios.post("/user/login",newUser) 
//         localStorage.setItem("token",res.data.token)
//         console.log(res)
//         dispatch({
//             type: LOGIN_SUCCESS,
//             payload : res.data.userAutho

//         })
//     } catch (error) {
//             dispatch({
//             type: LOGIN_FAIL,
//             payload : error.response.data
//         })
//     }
// }

// export const profile = (newUser) => async(dispatch)=>
// {   
//     const token= localStorage.getItem("token")
//     dispatch({
//         type :PROFILE
//     })
//     const  config ={
//         headers:{
//             Authorization:token 
//         }
//     }

//     try {
//         const res = await axios.get("/user/profile",config) //config must be the last things after all params
//         console.log(res)
//         dispatch({
//             type: PROFILE_SUCCESS,
//             payload : res.data

//         })
//     } catch (error) {
//             dispatch({
//             type: PROFILE_FAIL,
//             payload : error.response.data
//         })
//     }
// }