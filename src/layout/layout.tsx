import React from 'react'
import { Home } from '../pages/home'
import { PaymentDue } from '../pages/paymentDue'
import { NewPolicy } from '../pages/newPolicy'
import { AppRoutes } from '../route'

export const Layout = (): React.JSX.Element => {
  return (
    <div>
        {/* <Nav></Nav> */}
        <div className="mt-24 ml-36 mr-20">
            <AppRoutes />
        </div>
        {/* <Foot></Foot> */}
    </div>
  )
}
