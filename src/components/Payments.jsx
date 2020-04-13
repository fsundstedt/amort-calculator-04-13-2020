import React from 'react';

function pvp(p, r, t) {
    return (
        ((p * ((r / 12) / 100)) / (1 - (1 / ((1 + ((r / 12) / 100) ) ** t))))
    )
}

function int(payment, p, r) {
    return (
        (p * ((r / 12) / 100))
    )
}

export default function Payments({borrowDate, startDate, principal, time, interest}) {
    let schedule = [];

    const payment = pvp(principal, interest, time);

    let tPrinc = principal;
    let tInt = 0;

    const mPayment = () => {
        for ( let i = 0; i < time; i++ ) {

            let object = {
                remPrinc: principal - (principal - tPrinc),
                paidInt: tInt,
                currentInt: int(payment, tPrinc, interest),
                monthsRemaining: time - i - 1
            }

            tPrinc -= payment - object.currentInt;
            tInt += object.currentInt;
            schedule = [...schedule, object];
        }
    }

    return (
        <div>
            <div>Monthly Payment: ${pvp(principal, interest, time)}
            </div>
            <br></br>
            <div>{
            mPayment()
            }
            {
            schedule.map((item, index) => (
                <div>
                    <div>Month {index + 1}</div>
                    <div>Beginning Principal: ${schedule[index].remPrinc}</div>
                    <div>Interest Paid Prior: ${schedule[index].paidInt}</div>
                    <div>Interest Paid This Month: ${schedule[index].currentInt}</div>
                    <div>Payments Remaining: {schedule[index].monthsRemaining}</div>
                    <br></br>
                </div>
            ))
            }</div>
        </div>
    )
}