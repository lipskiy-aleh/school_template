import { Component } from "react";
import './style.css'

export class Stopwatch extends Component {
    constructor() {
        super()

        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0
        }
    }

    startStopwatch() {
        this.stopStopwatch()
        this.intervalId = setInterval(() => this.increaseTime(), 1000)
    }

    increaseTime() {
        if(this.state.seconds === 59) {
            this.setState((previousVal) => {
                return this.checkMinutes(previousVal)
            })
        }

        this.setState((previousVal) => {
             return {
                seconds: previousVal.seconds + 1
            }
        })
    }

    checkMinutes(previousVal) {
        if(this.state.minutes === 59) {
            return {
                seconds: 0,
                minutes: 0,
                hours: previousVal.hours + 1
            }
        }

        return {
            seconds: 0,
            minutes: previousVal.minutes + 1
        }
    }

    stopStopwatch() {
        clearInterval(this.intervalId)
    }

    resetStopwatch() {
        this.setState({
            seconds: 0,
            minutes: 0,
            hours: 0
        })
        this.stopStopwatch()
    }

    createTimeString(time) {
        return time.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
    }

    render() {
        return (
        <div className='stopwatch-content'>
            <div className='stopwatch-time'>
                {this.createTimeString(this.state.hours)}:
                {this.createTimeString(this.state.minutes)}:
                {this.createTimeString(this.state.seconds)}
            </div>
            <div className='stopwatch-buttons'>
                <button className='stopwatch-start' onClick={() => this.startStopwatch()}>Start</button>
                <button className='stopwatch-stop' onClick={() => this.stopStopwatch()}>Stop</button>
                <button className='stopwatch-reset' onClick={() => this.resetStopwatch()}>Reset</button>
            </div>
        </div>
        )
    }
}