import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {TextField,Button,Stack,Typography} from '@mui/material';
import Alert from './Alert.tsx';

interface UserData{
  name:string;
  phone:number;
  email:string;
}

const Home: React.FC = () => {

  const [user,setUser]=useState<UserData>({
    name:'',
    phone:0,
    email:''
  })

  const handleAdd=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    setUser({...user,[e.currentTarget.name]:e.currentTarget.value})
  }

  const navigate=useNavigate();
  const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    localStorage.setItem('userData',JSON.stringify(user))
    navigate('/dashboard')
  }

  return (
    <>
      <Typography m={4} sx={{textAlign:'center',color:'blue'}} variant='h4' component='h2'>Registration Form</Typography>
      <form onSubmit={(e)=>{handleSubmit(e)}} style={{width:'100%',padding:'4px'}}>
        <Stack width={400} spacing={3} sx={{margin:'auto'}}>
          <TextField name='name' onChange={(e)=>{handleAdd(e)}} label='Enter your name'  variant='standard' required type='text'/>
          <TextField name='phone' onChange={(e)=>{handleAdd(e)}} label='Enter your phone number' variant='standard' required type='number'/>
          <TextField name='email' onChange={(e)=>{handleAdd(e)}} label='Enter your email'  variant='standard' required type='email'/>
          <Button type='submit' variant='contained'>register</Button>
        </Stack>
      </form>
      <Alert/>
    </>
  )
}

export default Home;