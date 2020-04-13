import React, { Component } from 'react';
import Payments from './Payments';

export default class MainSection extends Component {
    state = {
        input: 0,
        borrowDate: 0,
        startDate: 1,
        principal: 12000,
        time: 80,
        interest: 5
    }

    handleChange = (e, item) => {

        this.setState({
            input: e.target.value
        })
    }
    
    handleSubmit = (e, item) => {
        e.preventDefault();
        this.setState({
            principal: this.state.input
        })
    }

    render() {
        const { borrowDate, startDate, principal, time, interest } = this.state;

        return (
            <div>
                <div>Main</div>
                <div>Settings</div>
                <div>
                    <label>Inputs</label>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} placeholder="Enter Amount" />
                        <input type="text" onChange={this.handleChange} placeholder="Enter Interest" />
                        <input type="text" onChange={this.handleChange} placeholder="Enter Time" />
                        <input type="text" onChange={this.handleChange} placeholder="Enter Amount" />
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