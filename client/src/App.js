import React, { Component } from 'react';

//components
import BookList from './components/BookList'

class App extends Component {
  render() {
    return (
      <div id="name">
        <BookList/>
      </div>
    );
  }
}

export default App;
