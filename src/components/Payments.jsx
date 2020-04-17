import React from 'react';
import { Payment, Summary, Month } from './Styles.js'

function pvp(p, r, t) {
    return (
        ((p * ((r / 12) / 100)) / (1 - (1 / ((1 + ((r / 12) / 100) ) ** t))))
    )
}

function int(principal, rate) {
    console.log(principal)
    console.log(rate)
    return (
        (principal * ((rate / 12) / 100))
    )
}

function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
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
                currentInt: int(tPrinc, interest),
                monthsRemaining: time - i - 1
            }

            tPrinc -= payment - object.currentInt;
            tInt += object.currentInt;
            schedule = [...schedule, object];
        }
    }

    return (
        <div>
            <Summary>
            {
            mPayment()
            }
                <div>Summary:
                    <div>
                        Amount Borrowed: ${addCommas(principal)}
                    </div>
                    <div>
                        Interest Rate: {interest}%
                    </div>
                    <div>
                        Term (months): {time}
                    </div>
                    <div>
                        Total Interest Cost: ${addCommas((schedule[time-1].paidInt + schedule[time-1].currentInt).toFixed(2))}
                    </div>
                </div>
                <div>
                    Monthly Payment: ${addCommas(pvp(principal, interest, time).toFixed(2))}
                </div>
            </Summary>
            <br></br>
            <div>
            {
            schedule.map((item, index) => (
                <>
                    <Payment>
                            <Month>Month {index + 1}</Month>
                            <div>Beginning Principal: ${addCommas(schedule[index].remPrinc.toFixed(2))}</div>
                            <div>Interest Paid Prior: ${addCommas(schedule[index].paidInt.toFixed(2))}</div>
                            <div>Interest Paid This Month: ${addCommas(schedule[index].currentInt.toFixed(2))}</div>
                            <div>Interest % of Payment: {((schedule[index].currentInt/payment)*100).toFixed(2)}%</div>
                            <div>Payments Remaining: {schedule[index].monthsRemaining}</div>
                    </Payment>
                    <br></br>
                </>
            ))
            }</div>
        </div>
    )
}