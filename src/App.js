import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import EthCrypto from 'eth-crypto';

import ScrollableFeed from 'react-scrollable-feed'

class App extends Component {

  state = {
    list: []
  }

  componentDidMount = () => {
    setInterval(() => {
      const num = Math.random();
      const messageHash = EthCrypto.hash.keccak256(num + 'salty');
      console.log(messageHash)
      if (this.state.list.length > 10) {

        // list = [...this.state.list, messageHash]

        const list = this.state.list

        list.shift()
        list.push(messageHash)

        this.setState({list: list})
      } else {
        this.setState({list: [...this.state.list, messageHash]})
      }

    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div class="book-wrapper">
          <input type="checkbox" name="book-toggle" id="book-toggle" />
          <label for="book-toggle">^</label>
          <div class="book-now">
            <form class="form-horizontal" role="form">
              <div class="container">
                <div class="row glow">
                  <div class="col-xs-8 col-xs-offset-2">
                    <ScrollableFeed forceScroll={true} >
                      {this.state.list.map((item, i) => <div key={i}>sig: {item}</div>)}
                    </ScrollableFeed>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
