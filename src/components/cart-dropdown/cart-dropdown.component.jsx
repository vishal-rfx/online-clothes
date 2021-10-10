import React from 'react'
import './cart-dropdown.styles.scss'

import CustomButton from '../custom-button/custom-button.component'

function CartDropDown() {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'/>
            <CustomButton>Go to Checkout</CustomButton>
        </div>
    )
}


export default CartDropDown