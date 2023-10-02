import { useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from "./appwrite/auth";
import { useEffect } from 'react';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();


  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[dispatch])

  // if (loading) {
  //   return <div>Loading...</div>
  // }

  return !loading ?(
    <>
     <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
      <div className="w-full block">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div> 
    </>
  ):null
}

export default App
