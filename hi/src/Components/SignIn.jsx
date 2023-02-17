import React, { useState } from 'react'
import {Form} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../redux/actions';
import './styleSheet.css'


const SignIn = () => {


   
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch() 
    const {loading} = useSelector(state=>state) 
    const handleSubmit= (e) => {
        e.preventDefault()
        const newUser={
            email,
            password
        }
        dispatch(login(newUser))
    }

  return (
    <div>
     {
        loading ? <h3>  loading ...</h3> :
        localStorage.getItem("token")? 
        <Navigate to="/User/Profile"/>
        : 
    

     <Form className='formclass' onSubmit={handleSubmit}>
     
     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
       <Form.Text className="text-muted">
         We'll never share your email with anyone else.
       </Form.Text>
     </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
     </Form.Group>
     <button id="bb" type="submit">     Submit   </button>
     </Form>

     }

    </div>
  )
}

export default SignIn