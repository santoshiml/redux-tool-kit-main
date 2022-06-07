import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'

// import { getLogout } from  '../redux/actions/login'
import { getLogout } from '../redux/slices/userSlice';


function Logout() {

	const navigate = useNavigate();
	const dispatch = useDispatch()


  useEffect(() => {
    console.log(333)
    fetchData()
   
   
  },[])

   const fetchData = async() => {
      await dispatch(getLogout())
      await navigate("/login")
    }

  return (
     <div>....</div>
    )
}

export default Logout;