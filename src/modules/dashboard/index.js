import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {  useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { fetchMovies } from '../../redux/feature/movie';
import Loader from '../../components/loader';
import { fetchCatsData } from '../../redux/feature/cats';

const Dashboard =()=>{
    const navigate= useNavigate();
    const dispatch = useDispatch();

    const appstate = useSelector(state => state)

    const {loading, movies ,error} = useSelector(state=> state.movies); 

    console.log(appstate , '*appstate**')
  

  useEffect(()=>{
     dispatch(fetchMovies());
     dispatch (fetchCatsData());

  },[])

    const handleLogout=()=>{
        dispatch(logout())
        navigate('/');
    

    }



    return (
        <div>

            <h1>Dashboard</h1>
            {loading && <Loader/>}
            {movies && movies.length>0 && movies.map((m, index)=> {
               return (
                <img src={m.url} key={index}/>
               )
            })}
            <button onClick={()=> handleLogout()}>Logout</button>
        </div>
    )

}


export default Dashboard;