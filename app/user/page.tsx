'use client';
import React from 'react'
import Product from '../products/product'

interface User{
  id:number;
  name:string;
}
const UsersPage = async() => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users',{ cache: 'no-store' });
  const Users : User[] = await res.json()
  return (
    <>
    <h1>Users</h1>
    <h2>{new Date().toLocaleTimeString()}</h2>
    <ul>
      {Users.map((user,index) => <li key={index}>{user.name}</li>)}
    </ul>
    </>
  )
}

export default UsersPage