import React from 'react';

function pvp(p, r, t) {
    return (
        ((p * ((r / 12) / 100)) / (1 - (1 / ((1 + ((r / 12) / 100) ) ** t))))
    )
}

function int(payment, p, i) {
    return (
        payment - (p * (i / 12))
    )
}

export default function Payments({borrowDate, startDate, principal, time, interest}) {
    let schedule = [];
    const payment = pvp(principal, interest, time);
    const mInterest = int(payment, principal, interest);

    let tPayment = 0;
    let tPrinc = 0;
    let tInt = 0;

    const mPayment = () => {
        for ( let i = 0; i < time; i++ ) {
            let object = {
                remPrinc: 200,
                paidInt: 500
            }
            schedule = [...schedule, object];
            console.log("test");
        }
        console.log(schedule[5])
        return schedule[0].remPrinc;
    }

    return (
        <div>
            <div>Total Payment: ${pvp(principal, interest, time)}
            </div>  
            <div>{time}</div>
            <div>{
            mPayment()
            }
            {
            schedule.map((item, index) => (
                <div>{schedule[index].paidInt}</div>
            ))
            }</div>
        </div>
    )
}