import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form';
// import { getLogin } from  '../redux/actions/login'
import { getLogin } from '../redux/slices/userSlice';

import { useNavigate } from 'react-router-dom';

const Login =() => {


 // const loading = useSelector(state => state.airlines.loading)
  const error =  useSelector(state => state.user.error)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(getLogin(data))
  }

  useEffect(() => {
    console.log(1233344, user)
    if (user && user.length != 0 )
    {
      navigate("/dashboard", { user: user })
    }
  }, [user])

  return (
    <div>
    	<h1>This is the Login page</h1>
      <p>{ error && "email or password is incorrect"}</p>
    	<form onSubmit={handleSubmit(onSubmit)}>
          <p>Email</p>
          <input {...register('email', { required: true })} />
          <p></p>
          {errors.email && <p>Email  is required.</p>}
          <p>Password</p>
          <input type="password" {...register('password', { required: true } )} />
          <p></p>
          {errors.password && <p>Password is required.</p>}
          <input type="submit" />
        </form>
    </div>
  );
}

export default Login;