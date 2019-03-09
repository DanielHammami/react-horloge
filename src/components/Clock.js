import React from 'react'
import Panel from './Panel'

export default class Clock extends React.Component {

    constructor() {
        super()

        this.state = {
            date: new Date(),
            isDateVisible: true
        }

        this.toggleDate = this.toggleDate.bind(this)
    }

    componentDidMount() {
        this.startTime()
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    startTime() {
        this.timer = setInterval(() => {
            this.setState(() => ({date: new Date()}))
        }, 1000)
    }

    toggleDate() {
        this.setState((prevState) => ({isDateVisible: !prevState.isDateVisible}))
    }

    render() {
        return (
            <div>
                <Panel toogleDate={this.toggleDate} dateOn={this.state.isDateVisible}/>
            </div>
        )
    }
}