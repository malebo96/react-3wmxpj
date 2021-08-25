import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'

import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';

export const Home = ({ user }) => {

    const history = useHistory();

   useEffect(() => {
        //forcing user to signup
     auth.onAuthStateChanged(user => {
           if (!user) {
                history.push('/login');
           }
       })
   })

    return (
        <div className='wrapper'>
         
            <Navbar user={user} />
            <ImageSlider slides={SliderData} />
            <Products />
           
        </div>
    )
}