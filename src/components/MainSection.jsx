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

    handleChange = (e) => {

        this.setState({
            principal: e.target.value
        })
    }
    
    handleSubmit = (e, item) => {
        e.preventDefault();
        this.setState({
            ...state,
            {e.target.name}: this.state.input
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
                        <input type="text" onChange={this.handleChange} name="principal" placeholder="Enter Amount" />
                        <input type="text" onChange={this.handleChange} name="interest" placeholder="Enter Interest" />
                        <input type="text" onChange={this.handleChange} name="time" placeholder="Enter Time" />
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