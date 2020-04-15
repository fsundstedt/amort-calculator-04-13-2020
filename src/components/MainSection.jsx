import React, { Component } from 'react';
import Payments from './Payments';
import DefaultScreen from './DefaultScreen';
import { Title, Button, Inputs, Input, Inputbox, Border } from './Styles.js'

export default class MainSection extends Component {
    state = {
        defaultComp: true,
        inputPrincipal: 0,
        inputTime: 0,
        inputInterest: 0,
        borrowDate: 0,
        startDate: 0,
        principal: 0,
        time: 0,
        interest: 0
    }

    reset = () => {
        this.setState({
            defaultComp: true,
        })
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
                    <Border>
                        <Payments
                        borrowDate={borrowDate}
                        startDate={startDate}
                        principal={inputPrincipal}
                        time={inputTime}
                        interest={inputInterest}/>
                    </Border>
                )
            }
        }

        return (
            <div>
                <Inputbox>
                    <Title>Amortization Calculator</Title>
                    <form onSubmit={this.handleSubmit}>
                        <Inputs><div>Principal:</div>
                            <Input type="text" onChange={this.handleChange} name="principal" placeholder="Enter Amount" />
                        </Inputs>
                        <Inputs><div>Interest:</div>
                            <Input type="text" onChange={this.handleChange} name="interest" placeholder="Enter Rate" />
                        </Inputs>
                        <Inputs><div>Term:</div>
                            <Input type="text" onChange={this.handleChange} name="time" placeholder="Enter Months" />
                        </Inputs>
                        <div>
                            <Button type="submit">Show Amortization Schedule</Button>
                        </div>
                    </form>
                </Inputbox>
                <br></br>
                <div>
                {ifDefault()}
                </div>
            </div>
        )
    }
}