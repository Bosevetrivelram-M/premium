import React from 'react'
import { Home } from '../pages/home'
import { PaymentDue } from '../pages/paymentDue'
import { NewPolicy } from '../pages/newPolicy'

export const Layout = () => {
  return (
    <div>
        {/* <Nav></Nav> */}
        <div className="mt-24 ml-36 mr-20">
            {/* <Home /> */}
            {/* <PaymentDue /> */}
            <NewPolicy /> 
        </div>
        {/* <Foot></Foot> */}
    </div>
  )
}
