import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Form, Button, FormGroup} from 'react-bootstrap';
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler =(e)=>{
        e.preventDefault();
        console.log('submit');
    }
  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
        <Form.Group controlId='email' className='my-3'>
        <Form.Label>Email Address</Form.Label>
        <Form.Control
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        >

        </Form.Control>
        </Form.Group>
        </Form>
    </FormContainer>
  )
}

export default LoginScreen;