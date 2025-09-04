import React from 'react'
import { HomeCard } from '../components/homeCard/homeCard'
import { PaymentCard } from '../components/paymentCard';

interface CardDetail {
    key: number;
    cardName: string;
    count: number;
}

interface PaymentDetail {
    key: number;
    policyName: string;
    amount: number;
    modeOfPayment: "Monthly" | "Half-Yearly" | "Yearly";
    dueIn: number;
}

export const Home = (): React.JSX.Element => {
    const cardDetails: CardDetail[] = [
        {
            key: 1,
            cardName: "Your Total Policies",
            count: 1500
        },
        {
            key: 2,
            cardName: "Total Active Policies",
            count: 1234
        },
        {
            key: 3,
            cardName: "Policy Due This Month",
            count: 200
        },
        {
            key: 4,
            cardName: "Policy Paid This Month",
            count: 144
        },
    ];

    const paymentDetails: PaymentDetail[] = [
        {
            key: 1,
            policyName: "Policy A",
            amount: 100,
            modeOfPayment: "Monthly",
            dueIn: 7,
        },
        {
            key: 2,
            policyName: "Policy B",
            amount: 500,
            modeOfPayment: "Half-Yearly",
            dueIn: 15,
        },
        {
            key: 1,
            policyName: "Policy C",
            amount: 1000,
            modeOfPayment: "Yearly",
            dueIn: 30,
        }
    ];

  return (
    <div>
        <div>
            {/* dashboard */}
            <div className="font-bold font-inter text-3xl pb-7">
                <h1>Dashboard</h1>
            </div>

            {/* card */}
            <div className="flex flex-row space-x-4">
                {cardDetails.map((details) => (
                    <HomeCard 
                        key={details.key}
                        cardName={details.cardName}
                        count={details.count} 
                    />
                ))}
            </div>

            {/* upcoming payment details */}
            <div className="pt-7 space-y-7">
                <h1 className="font-bold text-[22px] text-[#0D141C]">Upcoming Payments</h1>
                {paymentDetails?.map((payDetail) => (
                    <PaymentCard 
                        key={payDetail?.key}
                        policyName={payDetail?.policyName}
                        amount={payDetail?.amount}
                        modeOfPayment={payDetail?.modeOfPayment}
                        dueIn={payDetail?.dueIn}
                    />
                ))}
                
            </div>

        </div>
    </div>
  )
}
