import React from 'react'
import { Home } from '../pages/home'
import { PaymentDue } from '../pages/paymentDue'

export const Layout = () => {
  return (
    <div>
        {/* <Nav></Nav> */}
        <div className="mt-24 ml-36 mr-20">
            {/* <Home /> */}
            <PaymentDue />
        </div>
        {/* <Foot></Foot> */}
    </div>
  )
}
