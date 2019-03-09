import React from 'react'
import Header from './components/Header'
import './scss/styles.scss'

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      title: 'React Clock'
    };
  } 

  render() {
    return (
      <div className="App">
        <Header title={this.state.title}/>
      </div>
    );
  }
}