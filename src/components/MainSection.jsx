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

    handleChange = e => {
        this.setState({
            principal: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            principal: e.target.value
        })
    }

    render() {
        const { borrowDate, startDate, principal, time, interest } = this.state;

        return (
            <div>
                <div>Main</div>
                <div>Settings</div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} placholder="Amount Borrowed" />
                        <button type="submit">Enter</button>
                    </form>
                </div>
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