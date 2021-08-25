import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import Header from './Header'


export const Navbar = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        <div className='navbox'>
            <div className='leftside'>
               < Header />
              
               <div>
            <input style={{height: 50,width: 300, marginLeft:300, marginTop: 15, paddingLeft: 20, border: " 4px solid black"}} type="text" placeholder="search..."/>
        </div>
            </div>
            {!user && <div className='rightside'>

            </div>}
            {user && <div className='rightside'>
                <span><Link to="/" style={{fontSize: 15}} className='navlink'>{user}</Link></span>
                <span><Link to="cartproducts" className='navlink'><Icon  icon={cart} /></Link></span>
                <span className='no-of-products'>{totalQty}</span>
                <span><button style={{width: 100, height: 50, fontSize: 20, backgroundColor: "black"}} className='logout-btn' onClick={handleLogout}>Logout</button></span>
            </div>}
        </div>
    )
}