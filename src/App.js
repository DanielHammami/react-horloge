import React from 'react'
import Header from './components/Header'
import Clock from './components/Clock'
import './scss/styles.scss'

export default class App extends React.Component {

  constructor() {
    super()

    this.state = {
      title: 'Horloge React'
    }
  } 

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
        <Clock/>
      </div>
    )
  }
}