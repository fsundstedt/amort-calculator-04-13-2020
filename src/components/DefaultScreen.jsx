import React from 'react';
import { DefaultStyle } from './Styles.js';

export default function DefaultScreen () {
    return (
        <div>
            <DefaultStyle>
                <div>Enter the following info:</div>
                <div>- Loan Principal (the amount borrowed)</div>
                <div>- Interest Rate (as an integer)</div>
                <div>- Term (in months)</div>
            </DefaultStyle>
        </div>
    )
}