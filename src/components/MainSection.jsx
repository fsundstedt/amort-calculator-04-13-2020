import React, { Component } from 'react';
import Payments from './Payments';
import DefaultScreen from './DefaultScreen';
import { Section, Button } from './Styles.js'

export default class MainSection extends Component {
    state = {
        defaultComp: true,
        inputPrincipal: 0,
        inputTime: 0,
        inputInterest: 0,
        borrowDate: 0,
        startDate: 1,
        principal: 12000,
        time: 80,
        interest: 5
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            defaultComp: false,
            inputPrincipal: this.state.principal,
            inputTime: this.state.time,
            inputInterest: this.state.interest
        })
    }

    render() {
        const { defaultComp, borrowDate, startDate, inputPrincipal, inputTime, inputInterest } = this.state;

        const ifDefault = () => {
            if (defaultComp === true) {
                return (
                    <DefaultScreen />
                )
            } else {
                return (
                    <>
                        <div>
                            Amount Borrowed: ${inputPrincipal}; Interest Rate: {inputInterest}%; Time (months): {inputTime}
                        </div>
                        <Payments
                        borrowDate={borrowDate}
                        startDate={startDate}
                        principal={inputPrincipal}
                        time={inputTime}
                        interest={inputInterest}/>
                    </>
                )
            }
        }

        return (
            <div>
                <div>
                    <Section>Amortization Table</Section>
                    <label>Inputs</label>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.handleChange} name="principal" placeholder="Enter Amount" />
                        <input type="text" onChange={this.handleChange} name="interest" placeholder="Enter Interest" />
                        <input type="text" onChange={this.handleChange} name="time" placeholder="Enter Time" />
                        <br></br>
                        <br></br>
                        <Button type="submit">Enter</Button>
                    </form>
                </div>
                <div>
                {ifDefault()}
                </div>
            </div>
        )
    }
}