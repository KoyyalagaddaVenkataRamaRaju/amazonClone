import { Divider } from '@mui/material';
import React from 'react'
import Option from './Option';
import Right from './Right';
import Subtotal from './Subtotal';
import "./buynow.css";

const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className="leftbuyprice">Price</span>
                <Divider />

                <div className="item_container">
                    <img src="./amazon_PNG25.png" alt="" />
                    <div className="item_details">
                        <h3></h3>
                        <h3></h3>
                        <h3 className="differentprice"></h3>
                        <p className="unusall"></p>
                        <p></p>
                        <img src="" alt="" />
                        <Option />
                    </div>
                    <h3 className="item_price">40490.00</h3>
                </div>
                <Divider />
                <Subtotal />
            </div>
            <Right />
        </div>
      
    </div>
  )
}

export default Buynow
