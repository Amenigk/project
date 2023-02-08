import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { register } from '../redux/actions';


const Signup = () => {
   
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const dispatch = useDispatch() 
    const {loading,user} = useSelector(state=>state) 
    const handleSubmit= (e) => {
        e.preventDefault()
        const newUser={
            name,
            email,
            phone,
            password
        }
        dispatch(register(newUser))
    }


  return (
    <div>
      {
        loading ? <h3> loading ....   </h3>:
        user? <Navigate to="/User/SignIn" />
        :
      
     <Form onSubmit={handleSubmit}>
     
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

      <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
      </Form.Group>
       
      
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <br /><br /><br />
     
     <Link to="/User/SignIn"  > I have an account</Link>

    </Form>
    }
    </div>
  )
}

export default Signup