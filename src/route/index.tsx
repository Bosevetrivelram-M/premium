import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { PaymentDue } from '../pages/paymentDue'
import { NewPolicy } from '../pages/newPolicy'

export const AppRoutes = (): React.JSX.Element => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/payment-due" element={<PaymentDue />} />
            <Route path="/new-policy" element={<NewPolicy />} />
        </Routes>
    </div>
  )
}
