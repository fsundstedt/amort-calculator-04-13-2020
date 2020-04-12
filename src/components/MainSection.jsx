import React, { Component } from 'react';
import Payments from './Payments';

export default class MainSection extends Component {
    state = {
        borrowDate: 0,
        startDate: 1,
        principal: 12000,
        time: 80,
        interest: 5
    }

    render() {
        const { borrowDate, startDate, principal, time, interest } = this.state;

        return (
            <div>
                <div>Main</div>
                <div>Settings</div>
                <div>Inputs</div>
                <Payments
                borrowDate={borrowDate}
                startDate={startDate}
                principal={principal}
                time={time}
                interest={interest}/>
            </div>
        )
    }
}